from django.shortcuts import render

# for testing:
from django.http import JsonResponse

def hello_api(request):
    return JsonResponse({"message": "Hello from Django!"})

