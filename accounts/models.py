from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.utils import timezone
from datetime import timedelta
from django_ckeditor_5.fields import CKEditor5Field


class CustomUser(AbstractUser):
    # Additional fields
    name = models.CharField(max_length=255)
    college_name = models.CharField(max_length=255)
    passout_year = models.IntegerField(default=2023)
    is_premium = models.BooleanField(default=False)
    premium_expires_at = models.DateTimeField(null=True, blank=True)
    is_email_verified = models.BooleanField(default=False)
    verification_token = models.CharField(max_length=100, blank=True, null=True)

    # Referral fields
    referral_code = models.CharField(max_length=10, unique=True, blank=True, null=True)
    referred_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='referred_users')

    def __str__(self):
        return self.username

    def is_premium_valid(self):
        # Check if premium is active and expiration is in the future
        return self.is_premium and self.premium_expires_at > timezone.now()

    def activate_premium(self, days=None):
        # Set the default number of days if not provided
        if days is None:
            days = 30
        self.is_premium = True
        self.premium_expires_at = timezone.now() + timedelta(days=days)
        self.save()

    def deactivate_premium(self):
        
        self.is_premium = False
        self.premium_expires_at = None
        self.save()

    def save(self, *args, **kwargs):
        
        if not self.referral_code:
            import random
            import string
            self.referral_code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
        super().save(*args, **kwargs)
        
        
class JobAlert(models.Model):
    company_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    job_description = CKEditor5Field('Job Description', config_name='default')  # CKEditor field
    short_link = models.URLField(max_length=500)
    original_link = models.URLField(max_length=500)
    image = models.ImageField(upload_to='job_alerts/', blank=True, null=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='job_alerts')
    views = models.PositiveIntegerField(default=0)  # Field to track views

    def __str__(self):
        return f"{self.title} at {self.company_name}"
    

class Coupon(models.Model):
    code = models.CharField(max_length=50, unique=True)
    limit = models.PositiveIntegerField()  # Number of times the coupon can be used
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)  # Discount in percentage
    gives_free_premium = models.BooleanField(default=False)  # Whether this coupon gives free premium access
    days = models.PositiveIntegerField(default=0)  # Number of premium days granted by this coupon
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)  # Optional expiry date

    def is_valid(self):
        # Check if the coupon is still valid
        if self.limit > 0 and (not self.expires_at or self.expires_at > timezone.now()):
            return True
        return False

    def use_coupon(self):
        # Decrease the limit if the coupon is valid
        if self.is_valid():
            self.limit -= 1
            self.save()
            return True
        return False

    def __str__(self):
        return f"Coupon: {self.code} | Remaining: {self.limit}"
    
    
class WebsiteVisit(models.Model):
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    visited_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Visit from {self.ip_address} at {self.visited_at}"

    @classmethod
    def record_visit(cls, ip_address, user_agent):
        """Record a visit if it's unique for the day."""
        today = timezone.now().date()
        if cls.objects.filter(ip_address=ip_address, visited_at__date=today).exists():
            # Visit already recorded today for this IP
            return False
        cls.objects.create(ip_address=ip_address, user_agent=user_agent)
        return True

    @classmethod
    def get_daily_unique_visitor_count(cls, date=None):
        """Get the count of unique visitors for a given date."""
        if date is None:
            date = timezone.now().date()
        return cls.objects.filter(visited_at__date=date).values('ip_address').distinct().count()