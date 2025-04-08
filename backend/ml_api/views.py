from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Uczen, WynikGry
from .serializers import UczenSerializer, WynikGrySerializer
import subprocess

class UczenListView(generics.ListAPIView):
    queryset = Uczen.objects.all()
    serializer_class = UczenSerializer

class WynikiGryListView(generics.ListAPIView):
    queryset = WynikGry.objects.all()
    serializer_class = WynikGrySerializer

class RetrainModelView(APIView):
    def post(self, request):
        # odpal skrypt retrenowania ML
        subprocess.run(["python", "ml/train_model.py"])  # podaj w³aœciw¹ œcie¿kê
        return Response({"message": "Model retraining started."})
