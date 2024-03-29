# Generated by Django 5.0.2 on 2024-02-17 15:12

import phonenumber_field.modelfields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_customer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='phone_numer',
        ),
        migrations.AddField(
            model_name='customer',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None),
        ),
        migrations.AddField(
            model_name='customer',
            name='sites',
            field=models.ManyToManyField(related_name='customers', to='core.site'),
        ),
    ]
