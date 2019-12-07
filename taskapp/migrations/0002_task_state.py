# Generated by Django 2.0 on 2019-12-07 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='state',
            field=models.CharField(choices=[('TD', 'to do'), ('DN', 'done')], default='TD', max_length=2),
        ),
    ]
