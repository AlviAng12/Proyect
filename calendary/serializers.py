# events/serializers.py

from rest_framework import serializers
from .models import Event
from core.models import Employee  # Importa el modelo Employee si necesitas referenciarlo
from core.serializers import EmployeeSerializer  # Importa el serializador de Employee si lo vas a usar

class EventSerializer(serializers.ModelSerializer):
    # Si quieres mostrar información detallada del empleado en cada evento, puedes usar el serializador de Employee
    class Meta:
        model = Event
        fields = '__all__'
