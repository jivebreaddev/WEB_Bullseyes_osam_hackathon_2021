"""bullseyes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from bullseyes_server import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'accessusers', views.AccessViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
   # path('accessusers/create', views.accessuser_edit)
    # path('users/', views.user_list),
    # path('users/<int:pk>', views.user_edit),
    # path('accessusers/', views.accessuser_list),
    # path('accessusers/<int:pk>', views.accessuser_edit),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
