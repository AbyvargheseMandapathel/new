from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

app_name = 'accounts'

urlpatterns = [
    path('', views.login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('signup/', views.signup, name='signup'),
    path('email-verification/', views.email_verification, name='email_verification'),

    
    path('password_reset/', views.password_reset_request, name='password_reset_request'),
    path('reset/<uidb64>/<token>/', views.password_reset_confirm, name='password_reset_confirm'),
    path('password_reset/complete/', views.password_reset_complete, name='password_reset_complete'),
    path('verify/<uidb64>/<token>/', views.verify_email, name='verify_email'),
    
    path('create-job-alert/', views.create_job_alert, name='create_job_alert'),
    path('job/<int:pk>/', views.job_description, name='job_description'),
    path('expire-premium-status/', views.expire_premium_status, name='expire_premium_status'),
    path('leaderboard/', views.referral_leaderboard, name='referral_leaderboard'),
    path('apply-coupon/', views.apply_coupon, name='apply_coupon'),
    path('pricing/', views.pricing, name='pricing'),
    path('website_stats/', views.website_stats, name='website_stats'),
    path('users/', views.user_list, name='user_list'),
    
    path('coupons/', views.coupon_list, name='coupon_list'),
    path('coupons/add/', views.add_coupon, name='add_coupon'),
    path('coupons/edit/', views.edit_coupon, name='edit_coupon'),
    path('coupons/delete/', views.delete_coupon, name='delete_coupon'),
    path('send-job-alerts-email/', views.send_recent_job_alerts_email, name='send_job_alerts_email'),
]