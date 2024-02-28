from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Customer, Employee

def get_customers(request):
    customers = Customer.objects.all()
    data = [{'id': customer.id, 'name': customer.name, 'email': customer.email,'sites':list(customer.sites.values())} for customer in customers]
    return JsonResponse(data, safe=False)


def get_employees(request):
    employees = Employee.objects.all()
    data = [{'id': employee.id,'name':employee.name, 'email':employee.email, 'phone_number': str(employee.phone_number)} for employee in employees]
    return JsonResponse(data, safe=False)
