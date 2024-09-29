# middleware.py

from django.shortcuts import redirect
from django.urls import reverse,resolve
from django.utils.deprecation import MiddlewareMixin
from django.utils import timezone
from .models import WebsiteVisit

class UniqueVisitorMiddleware(MiddlewareMixin):
    def process_request(self, request):
        ip_address = self.get_ip_address(request)
        user_agent = request.META.get('HTTP_USER_AGENT', '')

        # Record visit if it's unique for the day
        WebsiteVisit.record_visit(ip_address, user_agent)

    def get_ip_address(self, request):
        """Extract the IP address from the request."""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
    
class RedirectAuthenticatedUserMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Get the current path
        current_path = request.path

        # Redirect logged-in users from login/signup to dashboard
        if request.user.is_authenticated:
            if current_path in [reverse('accounts:signup'), reverse('accounts:login'), reverse('accounts:password_reset_request')]:
                return redirect('accounts:dashboard')
        else:
            # List of restricted views for non-authenticated users
            restricted_views = ['accounts:dashboard', 'accounts:job_description']

            # Check if the requested view is in restricted_views
            resolved_url = resolve(current_path)
            if resolved_url.view_name in restricted_views:
                return redirect('accounts:login')

        response = self.get_response(request)
        return response