from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from taskapp import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('user/<int:pk>/', views.UserDetail.as_view()),
    path('tasks/', views.TaskList.as_view()),
    path('task/<int:pk>/', views.TaskDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
