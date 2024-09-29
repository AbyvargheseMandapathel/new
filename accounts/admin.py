from django.contrib import admin
from .models import Coupon, CustomUser, JobAlert, WebsiteVisit
from django.utils import timezone
from datetime import timedelta

@admin.register(JobAlert)
class JobAlertAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'title', 'short_link', 'original_link', 'image')
    search_fields = ('company_name', 'title')

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_premium', 'premium_expires_at', 'referral_code', 'referred_by')
    list_filter = ('is_premium',)
    search_fields = ('username', 'email', 'referral_code')
    fields = ('username', 'email', 'is_premium', 'premium_expires_at', 'name', 'college_name', 'passout_year', 'is_email_verified', 'verification_token', 'referral_code', 'referred_by')

    def save_model(self, request, obj, form, change):
        if obj.is_premium and not obj.premium_expires_at:
            now = timezone.now()
            expiration_date = now + timedelta(days=30)
            expiration_date = expiration_date.replace(hour=18, minute=30, second=0, microsecond=0)
            obj.premium_expires_at = expiration_date
        elif not obj.is_premium:
            obj.premium_expires_at = None
        
        super().save_model(request, obj, form, change)

admin.site.register(CustomUser, CustomUserAdmin)


@admin.register(Coupon)
class CouponAdmin(admin.ModelAdmin):
    list_display = ('code', 'limit', 'created_at', 'expires_at')
    search_fields = ('code',)
    
@admin.register(WebsiteVisit)
class WebsiteVisitAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'user_agent', 'visited_at')
    list_filter = ('visited_at',)
    search_fields = ('ip_address', 'user_agent')
