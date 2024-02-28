"""
URL configuration for guard_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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


from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from calendary.views import EventViewSet
from core.views import get_customers,get_employees


router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/',admin.site.urls),
    path('api/', include(router.urls)),
    path('api/customers',get_customers,name='get_customers'),
    path('api/employees',get_employees, name='get_employees')
]

