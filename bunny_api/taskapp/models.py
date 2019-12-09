from django.db import models

class User(models.Model):
    name = models.CharField(max_length=60, default='')

    def __str__(self):
        return self.name

class Task(models.Model):
    description = models.CharField(max_length=200, default='')
    STATE_CHOICES = [
        ('TD', 'to do'),
        ('DN', 'done'),
    ]
    state = models.CharField(max_length=2, choices = STATE_CHOICES, default = 'TD')
    user_id = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.description
