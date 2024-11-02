from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.urls import reverse
from django.utils import timezone
from datetime import timedelta
from django_ckeditor_5.fields import CKEditor5Field
from django.utils.text import slugify
from taggit.managers import TaggableManager


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
    
    
class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    content = CKEditor5Field('Content', config_name='default')
    cover_image = models.URLField(blank=True, null=True)
    tags = TaggableManager()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name="blogs")
    is_premium = models.BooleanField(default=False)
    views = models.PositiveIntegerField(default=0)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="blogs")
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            # Ensure the slug is unique
            original_slug = self.slug
            counter = 1
            while Blog.objects.filter(slug=self.slug).exists():
                self.slug = f"{original_slug}-{counter}"
                counter += 1
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
class Course(models.Model):
    LEVEL_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    description = CKEditor5Field('Course Description', config_name='default')
    created_at = models.DateTimeField(auto_now_add=True)
    language = models.CharField(max_length=50)
    enrollments = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    instructor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='courses')
    tags = TaggableManager()  
    level = models.CharField(max_length=12, choices=LEVEL_CHOICES, default='Beginner')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('accounts:course_overview', args=[str(self.id)])


class Chapter(models.Model):
    title = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='chapters')
    content = CKEditor5Field('Course Content', config_name='default')
    order = models.PositiveIntegerField(editable=True)

    def save(self, *args, **kwargs):
        if not self.order:
            self.order = self.course.chapters.count() + 1
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.order}. {self.title}"

    class Meta:
        ordering = ['order']


class Enrollment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} enrolled in {self.course.title}"

    def completion_percentage(self):
        total_chapters = self.course.chapters.count()
        completed_chapters = self.progresses.filter(completed=True).count()
        return (completed_chapters / total_chapters * 100) if total_chapters > 0 else 0


class Progress(models.Model):
    enrollment = models.ForeignKey(Enrollment, on_delete=models.CASCADE, related_name='progresses')
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)

    class Meta:
        unique_together = ('enrollment', 'chapter')

    def __str__(self):
        return f"{self.chapter.title} - {'Completed' if self.completed else 'Not Completed'}"