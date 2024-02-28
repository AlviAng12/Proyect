from django.db import models
from core.models import Employee, Site, Customer
from django.utils import timezone
# !SI TE DA ERROR, A LA HORA DE CAMBIAR RECUERDA QUE AJA, HAS CREADO DJANGO APPS PARA EMPLEADOS y GESTION DE LOCALIZACION.

# Create your models here.
class Event(models.Model):

    start_time = models.DateTimeField()
    finish_time = models.DateTimeField()
    role = models.CharField(max_length = 20, null = True)
    rate = models.CharField(max_length = 20, null = True)
    employee = models.ForeignKey(Employee, on_delete = models.CASCADE,null = True, blank = True)
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE, null = True, blank = True)
    site = models.ForeignKey(Site, on_delete = models.SET_NULL,null = True, blank = True)
    is_expired = models.BooleanField(default = False)
    status = models.CharField(max_length = 20, null = True, blank = True)
 


    def verify_expire(self):
        current = timezone.now()
        if current < self.start_time:
            time_difference = self.start_time - current
            hours_until_start = time_difference.total_seconds() / 3600
            return f"In {int(hours_until_start)} hours",False
        elif self.start_time <= current <= self.finish_time:
            return f"In process",False
        else:
            return True
    def __str__(self):
        return f"{self.customer}-{self.site}"