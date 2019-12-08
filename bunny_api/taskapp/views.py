from django.shortcuts import render
from rest_framework import generics
from .models import User, Task
from .serializers import UserSerializer, TaskSerializer
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
import json
from rest_framework.response import Response
from rest_framework.views import APIView
"""
class tasksByUser(generics.ListCreateAPIView):

    
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        print(user.task_set.all())
        
        serializer_class = TaskSerializerUser(user)
"""
"""        serializer = TaskSerializer(user.task_set.all())
        print(serializer)
        return Response(serializer.data)

    def get(self, request, pk):
        queryset = User.objects.get(pk=pk).task_set.all()
        
    serializer_class = TaskSerializer

"""    """
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        tasks = user.task_set.all()
        serializer = TaskSerializer
        #serializer = []
        #for task in tasks:
         #   serializer.append(TaskSerializer(task).data)
        print("serializer: {}".format(serializer))
        #serializer = json.dumps(serializer)
        return Response(serializer)"""


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

