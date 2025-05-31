# views.py (zaktualizowane z DRF i serializerami)
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import (
    DimStudent, DimTeacher, DimParent,
    FactWritingDataset, FactTeacherSurveyDataset,
    FactShapesDataset, FactEmotionsDataset, FactAutismTeacherSurveyDataset
)
from .serializers import (
    DimStudentSerializer, DimTeacherSerializer, DimParentSerializer,
    FactWritingDatasetSerializer, FactShapesDatasetSerializer,
    FactEmotionsDatasetSerializer, FactAutismTeacherSurveyDatasetSerializer,
    FactTeacherSurveyDatasetSerializer
)

# POST Endpoints
class WritingDataCreateView(generics.CreateAPIView):
    queryset = FactWritingDataset.objects.all()
    serializer_class = FactWritingDatasetSerializer

class ShapesDataCreateView(generics.CreateAPIView):
    queryset = FactShapesDataset.objects.all()
    serializer_class = FactShapesDatasetSerializer

class EmotionsDataCreateView(generics.CreateAPIView):
    queryset = FactEmotionsDataset.objects.all()
    serializer_class = FactEmotionsDatasetSerializer

# GET Views
class StudentListView(generics.ListAPIView):
    queryset = DimStudent.objects.all()
    serializer_class = DimStudentSerializer

class StudentDetailView(generics.RetrieveAPIView):
    queryset = DimStudent.objects.all()
    serializer_class = DimStudentSerializer
    lookup_field = 'pk'

class TeacherListView(generics.ListAPIView):
    queryset = DimTeacher.objects.all()
    serializer_class = DimTeacherSerializer

class ParentListView(generics.ListAPIView):
    queryset = DimParent.objects.all()
    serializer_class = DimParentSerializer

class WritingDatasetListView(generics.ListAPIView):
    queryset = FactWritingDataset.objects.all()
    serializer_class = FactWritingDatasetSerializer

class ShapesDatasetListView(generics.ListAPIView):
    queryset = FactShapesDataset.objects.all()
    serializer_class = FactShapesDatasetSerializer

class EmotionsDatasetListView(generics.ListAPIView):
    queryset = FactEmotionsDataset.objects.all()
    serializer_class = FactEmotionsDatasetSerializer

class AutismSurveyListView(generics.ListAPIView):
    queryset = FactAutismTeacherSurveyDataset.objects.all()
    serializer_class = FactAutismTeacherSurveyDatasetSerializer

class TeacherSurveyListView(generics.ListAPIView):
    queryset = FactTeacherSurveyDataset.objects.all()
    serializer_class = FactTeacherSurveyDatasetSerializer