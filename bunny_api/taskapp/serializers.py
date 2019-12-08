from rest_framework import serializers
from .models import User, Task

class UserSerializer(serializers.ModelSerializer):
    tasks = serializers.StringRelatedField(
        many=True,
    )
    
    class Meta:
        model = User
        fields = ('id', 'name', 'tasks')

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'description', 'state', 'user_id')

"""class TaskSerializerUser(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'description', 'state', 'user_id')
"""
