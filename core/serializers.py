# core/serializers.py

from rest_framework import serializers
from .models import Employee,Site,Customer

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'  # Selecciona todos los campos del modelo


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = '__all__'  # Selecciona todos los campos del modelo

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'
