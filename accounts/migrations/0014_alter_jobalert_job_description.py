# Generated by Django 5.1.1 on 2024-09-29 07:20

import django_ckeditor_5.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_websitevisit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobalert',
            name='job_description',
            field=django_ckeditor_5.fields.CKEditor5Field(verbose_name='Job Description'),
        ),
    ]
