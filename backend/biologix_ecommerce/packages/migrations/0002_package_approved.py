# Generated by Django 5.0.2 on 2024-02-14 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('packages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='package',
            name='approved',
            field=models.BooleanField(default=False),
        ),
    ]
