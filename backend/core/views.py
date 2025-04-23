from django.shortcuts import render

# for testing:
from django.http import JsonResponse

def hello_api(request):
    return JsonResponse({"message": "Hello from Django!"})


# for collecting results from games to database
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import *
from .serializers import *

class ShapesDatasetView(APIView):
    def post(self, request):
        serializer = ShapesDatasetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmotionsDatasetView(APIView):
    def post(self, request):
        serializer = EmotionsDatasetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class WritingsDatasetView(APIView):
    def post(self, request):
        serializer = WritingsDatasetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
