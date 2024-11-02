from django.contrib import admin
from .models import Blog, Category, Chapter, Coupon, Course, CustomUser, Enrollment, JobAlert, Progress, WebsiteVisit
from django.utils import timezone
from datetime import timedelta
from django.utils.html import format_html

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
    
    
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'is_premium', 'views', 'created_at')
    list_filter = ('category', 'is_premium', 'author')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}  # Auto-generate slug from title
    
    
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'created_at', 'enrollments', 'rating')
    search_fields = ('title', 'instructor__username')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'order')
    list_filter = ('course',)
    ordering = ('course', 'order')

@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'created_at')
    list_filter = ('course', 'user')

@admin.register(Progress)
class ProgressAdmin(admin.ModelAdmin):
    list_display = ('enrollment', 'chapter', 'completed')
    list_filter = ('enrollment__course', 'completed')