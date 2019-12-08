from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from taskapp import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('tasks/', views.TaskList.as_view()),
    path('tasks/<int:pk>/', views.TaskDetail.as_view()),
#    path('users/<int:pk>/tasks', views.tasksByUser.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
