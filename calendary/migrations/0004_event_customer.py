# Generated by Django 5.0.2 on 2024-02-16 08:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calendary', '0003_event_is_expired'),
        ('core', '0004_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='customer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.customer'),
        ),
    ]