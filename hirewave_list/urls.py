from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static


from hirewave_list import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),  # Include accounts app URLs
    path("ckeditor5/", include('django_ckeditor_5.urls')),
    path("ckeditor/", include('ckeditor_uploader.urls')), 
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
