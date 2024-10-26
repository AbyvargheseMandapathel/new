import asyncio  # Add this import
from django.forms import ValidationError
from django.utils import timezone
from django.http import HttpResponseForbidden, JsonResponse
from django.utils.dateparse import parse_datetime
from datetime import timedelta
from urllib import request
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
import requests
from telegram import Bot
from channels.db import database_sync_to_async
from django.conf import settings
from django.db.models import Count
from django.utils.timezone import now, timedelta,localdate
from django.contrib.auth.decorators import user_passes_test
from django.db.models.functions import TruncDate
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.views.decorators.http import require_POST




from .models import Coupon, CustomUser, JobAlert, WebsiteVisit
from .utils import send_job_alert_to_telegram
from accounts import models
from django.core.paginator import Paginator

User = get_user_model()


def signup(request):
    # If the user is already logged in, redirect to the dashboard
    if request.user.is_authenticated:
        return redirect('accounts:dashboard')

    if request.method == 'POST':
        first_name = request.POST.get('first_name', '').strip()
        last_name = request.POST.get('last_name', '').strip()
        username = request.POST.get('username', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        confirm_password = request.POST.get('confirm_password', '')
        college_name = request.POST.get('college_name', '').strip()
        passout_year = request.POST.get('passout_year', '').strip()
        referral_code = request.POST.get('referral_code', None)

        # Validate if email or username already exists
        if CustomUser.objects.filter(username=username).exists():
            messages.error(request, 'Username already exists.')
            return redirect('accounts:signup')

        if CustomUser.objects.filter(email=email).exists():
            messages.error(request, 'Email already registered.')
            return redirect('accounts:signup')

        # Validate referral code
        referrer = None
        if referral_code:
            try:
                referrer = CustomUser.objects.get(referral_code=referral_code)
            except CustomUser.DoesNotExist:
                messages.error(request, 'Invalid referral code.')
                return redirect('accounts:signup')

        # Create the new user
        user = CustomUser.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            college_name=college_name,
            passout_year=passout_year,
            referred_by=referrer  # Set the referrer if available
        )
        user.save()

        # Send verification email
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        domain = get_current_site(request).domain
        verification_link = f"https://hirewave.online/verify/{uid}/{token}/"
        subject = "Verify Your Email"

        # Render the HTML content for the email
        html_message = render_to_string('accounts/email_verification_email.html', {
            'user': user,
            'link': verification_link,
        })
        plain_message = strip_tags(html_message)

        # Send email using EmailMultiAlternatives to support HTML
        email = EmailMultiAlternatives(subject, plain_message, settings.DEFAULT_FROM_EMAIL, [user.email])
        email.attach_alternative(html_message, "text/html")
        email.send()

        messages.success(request, 'Account created. Please check your email to verify your account.')
        return redirect('accounts:email_verification')

    referral_code = request.GET.get('referral', '')

    return render(request, 'accounts/signup.html', {
        'referral_code': referral_code,  # Pass the referral code to the template
    })

def verify_email(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_email_verified = True
        user.save()
        messages.success(request, 'Email verified successfully. You can now log in.')
        return redirect('accounts:login')
    else:
        messages.error(request, 'Verification link is invalid or has expired.')
        return redirect('accounts:login')
    
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            if user.is_email_verified:
                auth_login(request, user)
                return redirect('accounts:dashboard')
            else:
                messages.error(request, 'Email not verified. Please check your email.')
        else:
            messages.error(request, 'Invalid username or password')
    
    return render(request, 'accounts/login.html')

def logout_view(request):
    auth_logout(request)
    return redirect('accounts:login')

@login_required
def dashboard(request):
    user = request.user

    # Check if the user's email is verified
    if not user.is_email_verified:
        messages.error(request, 'Please verify your email to access the dashboard.')
        return redirect('accounts:login')

    job_alerts_list = JobAlert.objects.all().order_by('-created_at')

    # Add pagination: 10 job alerts per page
    paginator = Paginator(job_alerts_list, 10)
    page_number = request.GET.get('page')
    job_alerts = paginator.get_page(page_number)

    context = {
        'user': user,
        'job_alerts': job_alerts,
        'is_premium': user.is_premium,
    }
    return render(request, 'accounts/dashboard.html', context)

@login_required
def job_description(request, pk):
    job_alert = get_object_or_404(JobAlert, pk=pk)
    is_premium = request.user.is_premium
    job_alert.views += 1
    job_alert.save()

    context = {
        'job_alert': job_alert,
        'is_premium': is_premium,
    }
    
    return render(request, 'accounts/job_description.html', context)

def password_reset_request(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        user = User.objects.filter(email=email).first()

        if user:
            # Generate token and uid for password reset
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            domain = get_current_site(request).domain
            link = f"https://hirewave.online/reset/{uid}/{token}/"

            # Subject of the email
            subject = "Password Reset Request"

            # Render the HTML content for the email
            html_message = render_to_string('accounts/password_reset_email.html', {
                'user': user,
                'link': link,
            })
            plain_message = strip_tags(html_message)

            # Send email using EmailMultiAlternatives to support HTML
            email_message = EmailMultiAlternatives(subject, plain_message, settings.DEFAULT_FROM_EMAIL, [email])
            email_message.attach_alternative(html_message, "text/html")
            email_message.send()

            messages.success(request, 'Password reset email sent.')
        else:
            messages.error(request, 'Email not found.')

    return render(request, 'accounts/password_reset_request.html')

def password_reset_confirm(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        if request.method == 'POST':
            new_password = request.POST.get('new_password')
            confirm_password = request.POST.get('confirm_password')
            
            if new_password == confirm_password:
                user.set_password(new_password)
                user.save()
                auth_login(request, user)  
                messages.success(request, 'Password has been reset successfully.')
                return redirect('accounts:dashboard')
            else:
                messages.error(request, 'Passwords do not match.')
        return render(request, 'accounts/password_reset_confirm.html')
    else:
        messages.error(request, 'Invalid token or user.')
        return redirect('accounts:password_reset_request')

def password_reset_complete(request):
    return render(request, 'accounts/password_reset_complete.html')

@login_required
def create_job_alert(request):
    if not request.user.is_superuser:
        return render(request, 'accounts/permission_denied.html')

    if request.method == 'POST':
        company_name = request.POST.get('company_name')
        title = request.POST.get('title')
        job_description = request.POST.get('job_description')
        original_link = request.POST.get('original_link')
        image = request.FILES.get('image')

        # Shorten the URL
        short_link = shorten_url(original_link)

        # Create a new JobAlert instance
        job_alert = JobAlert.objects.create(
            company_name=company_name,
            title=title,
            job_description=job_description,
            short_link=short_link,
            original_link=original_link,
            image=image,
            author=request.user
        )

        # Send Telegram alert asynchronously
        asyncio.run(send_job_alert_to_telegram(job_alert))

        messages.success(request, 'Job alert created successfully.')
        return redirect('accounts:dashboard')

    return render(request, 'accounts/create_job_alert.html')

def shorten_url(original_url):
    api_key = "85915e1afba18a1aa0ce173e48396ea03f28d0af"  # Replace with your actual API key
    api_url = f"https://shrinkme.io/api?api={api_key}&url={original_url}"

    try:
        response = requests.get(api_url)
        response.raise_for_status()
        result = response.json()
        
        if result.get('status') == 'success':
            return result.get('shortenedUrl')
        else:
            raise Exception("Error shortening URL: " + result.get('error', 'Unknown error'))
    except requests.RequestException as e:
        raise Exception(f"Request failed: {e}")
    
    

def expire_premium_status(request):

    now = timezone.now()
    in_24_hours = now + timezone.timedelta(hours=24)

    # Get users whose premium status is expiring in the next 24 hours
    users_premium_ending_soon = CustomUser.objects.filter(
        is_premium=True,
        premium_expires_at__gte=now,
        premium_expires_at__lte=in_24_hours
    )

    # Get users with already expired premium status
    users_with_expired_premium = CustomUser.objects.filter(
        is_premium=True,
        premium_expires_at__lt=now
    )
    
    # Send email notifications for users whose premium is about to expire
    for user in users_premium_ending_soon:
        subject = 'Your Premium Status is About to Expire'
        message = render_to_string('accounts/premium_expiration_notification.html', {
            'user': user,
            'expiration_date': user.premium_expires_at,
        })
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])

    # Send email notifications for users whose premium has already expired
    for user in users_with_expired_premium:
        user.is_premium = False
        user.premium_expires_at = None  # Optionally clear the expiration date
        user.save()
        
        subject = 'Your Premium Status Has Expired'
        message = render_to_string('accounts/premium_expired_notification.html', {
            'user': user,
        })
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])

    return JsonResponse({'status': 'Premium status updated and notifications sent'})


@login_required
def referral_leaderboard(request):
    # Get all users with a referral code who referred others
    referrer_counts = CustomUser.objects.filter(
        referred_by__isnull=False
    ).values('referred_by').annotate(count=Count('id')).order_by('-count')[:10]  # Limit to top 10
    
    # Create a list of referrers with their counts and ranks
    leaderboard = []
    for index, entry in enumerate(referrer_counts):
        referrer = CustomUser.objects.get(id=entry['referred_by'])
        count = entry['count']
        
        leaderboard.append({
            'referrer': referrer,
            'count': count,
            'rank': index + 1  # Ranks start from 1
        })

    # Determine the rank of the logged-in user
    user_rank = next((entry['rank'] for entry in leaderboard if entry['referrer'] == request.user), None)

    # Generate referral link for the logged-in user
    logged_in_user_referral_link = request.build_absolute_uri(f'/signup/?referral={request.user.referral_code}')

    return render(request, 'accounts/leaderboard.html', {
        'leaderboard': leaderboard,
        'logged_in_user_referral_link': logged_in_user_referral_link,
        'user_rank': user_rank  # Pass the rank of the logged-in user to the template
    })
    
@login_required
def apply_coupon(request):
    if request.method == 'POST':
        coupon_code = request.POST.get('coupon_code')
        try:
            coupon = Coupon.objects.get(code=coupon_code)
        except Coupon.DoesNotExist:
            messages.error(request, 'Invalid coupon code.')
            return redirect('accounts:dashboard')

        if not coupon.is_valid():
            messages.error(request, 'Coupon is invalid or has expired.')
            return redirect('accounts:dashboard')

        try:
            if coupon.gives_free_premium and coupon.days > 0:
                if request.user.is_premium_valid():
                    messages.error(request, 'You already have premium access. Cannot apply additional premium coupon.')
                    return redirect('accounts:dashboard')
                else:
                    request.user.activate_premium(days=coupon.days)
                    coupon.use_coupon()
                    messages.success(request, f'Coupon applied! You have received {coupon.days} days of free premium access.')
            else:
                discount_percentage = coupon.discount_percentage
                if discount_percentage > 0:
                    total_price = 100  # Example total price, adjust according to your use case
                    discounted_price = total_price - (total_price * (discount_percentage / 100))
                    coupon.use_coupon()
                    messages.success(request, f'Coupon applied! You received a {discount_percentage}% discount. New price: {discounted_price}')
                else:
                    messages.success(request, 'Coupon applied but no discount or premium benefits available.')
        except ValidationError as e:
            messages.error(request, str(e))

    return redirect('accounts:dashboard')


@user_passes_test(lambda u: u.is_superuser)
def website_stats(request):
    visits = WebsiteVisit.objects.all()
    total_visits = visits.count()

    # Calculate time periods
    today = now().date()
    yesterday = today - timedelta(days=1)
    start_of_week = today - timedelta(days=today.weekday())
    start_of_month = today.replace(day=1)

    # Visits for each period
    today_visits = visits.filter(visited_at__date=today).count()
    yesterday_visits = visits.filter(visited_at__date=yesterday).count()
    week_visits = visits.filter(visited_at__date__gte=start_of_week).count()
    month_visits = visits.filter(visited_at__date__gte=start_of_month).count()

    # Get visit counts by day for the past 30 days
    last_30_days = now() - timedelta(days=30)
    daily_visits = (
        visits.filter(visited_at__gte=last_30_days)
        .annotate(day=TruncDate('visited_at'))
        .values('day')
        .annotate(count=Count('id'))
        .order_by('day')
    )

    # Get visit counts by day for the past 7 days
    last_7_days = now() - timedelta(days=7)
    daily_visits_past_7_days = (
        visits.filter(visited_at__gte=last_7_days)
        .annotate(day=TruncDate('visited_at'))
        .values('day')
        .annotate(count=Count('id'))
        .order_by('day')
    )

    # Calculate user statistics
    total_users = CustomUser.objects.count()
    premium_users = CustomUser.objects.filter(is_premium=True).count()

    # Convert daily visits to list for chart
    labels = [str(entry['day']) for entry in daily_visits]
    data = [entry['count'] for entry in daily_visits]

    # Convert daily visits for past 7 days to list for table
    labels_past_7_days = [str(entry['day']) for entry in daily_visits_past_7_days]
    data_past_7_days = [entry['count'] for entry in daily_visits_past_7_days]

    context = {
        'total_visits': total_visits,
        'today_visits': today_visits,
        'yesterday_visits': yesterday_visits,
        'week_visits': week_visits,
        'month_visits': month_visits,
        'labels': labels,
        'data': data,
        'labels_past_7_days': labels_past_7_days,
        'data_past_7_days': data_past_7_days,
        'total_users': total_users,
        'premium_users': premium_users,
    }
    return render(request, 'accounts/website_stats.html', context)


@login_required
def pricing(request):
    return render(request, 'accounts/pricing.html')


@user_passes_test(lambda u: u.is_superuser)
def user_list(request):
    users = User.objects.all()  # Fetch all users from the database

    # Pagination logic
    paginator = Paginator(users, 10)  # Show 2 users per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,  # Pass the page object to the template
    }
    return render(request, 'accounts/user_list.html', context)


def is_superuser(user):
    return user.is_superuser

# @user_passes_test(is_superuser)
# def coupon_list(request):
#     coupons = Coupon.objects.all()
#     return render(request, 'accounts/coupons.html', {'coupons': coupons})


@user_passes_test(is_superuser)
def coupon_list(request):
    coupon_list = Coupon.objects.all()
    paginator = Paginator(coupon_list, 10)  # Show 10 coupons per page

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'accounts/coupons.html', {'page_obj': page_obj})

@user_passes_test(is_superuser)
def add_coupon(request):
    if request.method == 'POST':
        code = request.POST.get('code')
        limit = request.POST.get('limit')
        expires_at = request.POST.get('expires_at')
        gives_free_premium = 'gives_free_premium' in request.POST
        days = request.POST.get('days', 30)  
        
        Coupon.objects.create(
            code=code,
            limit=limit,
            expires_at=expires_at,
            gives_free_premium=gives_free_premium,
            days=days
        )
        return redirect('accounts:coupon_list')  # Redirect to the coupon management page

@user_passes_test(is_superuser)
def edit_coupon(request):
    if request.method == 'POST':
        coupon_id = request.POST.get('id')
        code = request.POST.get('code')
        limit = request.POST.get('limit')
        expires_at = request.POST.get('expires_at')
        gives_free_premium = 'gives_free_premium' in request.POST
        days = request.POST.get('days', 30)  

        coupon = get_object_or_404(Coupon, id=coupon_id)
        coupon.code = code
        coupon.limit = limit
        coupon.expires_at = expires_at
        coupon.gives_free_premium = gives_free_premium
        coupon.days = days
        coupon.save()
        return redirect('accounts:coupon_list')  

@user_passes_test(is_superuser)
def delete_coupon(request):
    if request.method == 'POST':
        coupon_id = request.POST.get('id')

        if coupon_id:
            try:
                coupon = get_object_or_404(Coupon, pk=coupon_id)  # Use pk to get the object
                coupon.delete()
                messages.success(request, 'Coupon deleted successfully.')
            except Coupon.DoesNotExist:
                messages.error(request, 'Coupon not found.')
        else:
            messages.error(request, 'Coupon ID not provided.')

    return redirect('accounts:coupon_list') 


def email_verification(request):
    return render(request, 'accounts/email_verification.html')

