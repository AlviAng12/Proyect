from django.contrib import admin
from calendary.models import Event
from core.models import Customer,Site,Employee
# Register your models here.
admin.site.register(Event) 
admin.site.register(Customer)
admin.site.register(Site)
admin.site.register(Employee) 
