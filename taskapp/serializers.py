from rest_framework import serializers
from .models import User, Task

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name' )

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'description', 'state', 'user_id')
