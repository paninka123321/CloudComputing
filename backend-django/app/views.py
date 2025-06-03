# views.py (zaktualizowane z DRF i serializerami)
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
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

# === CREATE (POST) ===
class StudentCreateView(generics.CreateAPIView):
    queryset = DimStudent.objects.all()
    serializer_class = DimStudentSerializer

class TeacherCreateView(generics.CreateAPIView):
    queryset = DimTeacher.objects.all()
    serializer_class = DimTeacherSerializer

class ParentCreateView(generics.CreateAPIView):
    queryset = DimParent.objects.all()
    serializer_class = DimParentSerializer

class WritingDataCreateView(generics.CreateAPIView):
    queryset = FactWritingDataset.objects.all()
    serializer_class = FactWritingDatasetSerializer

class ShapesDataCreateView(generics.CreateAPIView):
    queryset = FactShapesDataset.objects.all()
    serializer_class = FactShapesDatasetSerializer

class EmotionsDataCreateView(generics.CreateAPIView):
    queryset = FactEmotionsDataset.objects.all()
    serializer_class = FactEmotionsDatasetSerializer

class AutismSurveyCreateView(generics.CreateAPIView):
    queryset = FactAutismTeacherSurveyDataset.objects.all()
    serializer_class = FactAutismTeacherSurveyDatasetSerializer

class TeacherSurveyCreateView(generics.CreateAPIView):
    queryset = FactTeacherSurveyDataset.objects.all()
    serializer_class = FactTeacherSurveyDatasetSerializer

# === LIST (GET) ===
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

#returns only the students belonging to the currently authenticated teacher's class

class TeacherStudentListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # This assumes the teacher is authenticated via `request.user`
        # You can identify the teacher through request.user or from an ID passed in headers or JWT

        # Get the teacher’s record, assuming your User model links to DimTeacher
        try:
            teacher = DimTeacher.objects.get(user=request.user)
        except DimTeacher.DoesNotExist:
            return Response({"detail": "Teacher profile not found."}, status=404)

        students = DimStudent.objects.filter(
            class_name=teacher.class_name,
        )

        serializer = DimStudentSerializer(students, many=True)
        return Response(serializer.data)