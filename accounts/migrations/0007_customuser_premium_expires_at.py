# Generated by Django 5.1.1 on 2024-09-14 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_jobalert_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='premium_expires_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
