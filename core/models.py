from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length = 200, null = True)
    email = models.EmailField(unique=True, null = True)
    phone_number = PhoneNumberField(blank = True)

    def __str__(self):
        return self.name


class Site(models.Model):
    name = models.CharField(max_length = 200)

    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    phone_number = PhoneNumberField(blank=True)
    sites = models.ManyToManyField('Site', related_name='customers')

    def __str__(self):
        return self.name
    


    # !RECUERDA QUE PAPU, TIENES QUE SEPARAR ESTOS DOS CAMPOS EN ALGUN MOMENTO SI LO VES NECESARIO, DEBIDO A QUE HABRA MAS TIPOS DE EMPLEADOS 
    # !Y LOCALIZACIONES, SON ALGO MUCHO MAS COMPLEJO, YA SABES!!!!, ESTO ES SOLO PARA EL EJERCICIO BASICO DEL CALENDARIO

    
