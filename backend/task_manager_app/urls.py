from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# router = DefaultRouter()
# router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('tasks/', TaskViewSet.as_view()),
    path('tasks/<int:pk>', TaskViewSet.as_view()),
]
