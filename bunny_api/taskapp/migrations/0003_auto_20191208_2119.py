# Generated by Django 2.0.13 on 2019-12-08 21:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('taskapp', '0002_task_state'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='user_id',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='taskapp.User'),
        ),
    ]
