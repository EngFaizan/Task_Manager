from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskViewSet(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
