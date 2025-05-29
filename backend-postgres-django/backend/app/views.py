# Views respond to HTTP requests, it communicates between fronted (thorough urls.py) and backend
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.views import View
from django.shortcuts import get_object_or_404
from .models import (
    DimStudent, DimTeacher, DimParent,
    FactWritingDataset, FactTeacherSurveyDataset,
    FactShapesDataset, FactEmotionsDataset, FactAutismTeacherSurveyDataset
)
from .serializers import DimStudentSerializer, FactWritingDatasetSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

######### API endpoints #########

# @csrf_exempt
# def writing_data_create(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)

#             student_id = data.get('student')
#             image_uri = data.get('image')
#             time = data.get('time')

#             student = DimStudent.objects.get(pk=student_id)

#             writing = FactWritingDataset.objects.create(
#                 student=student,
#                 png_file=image_uri,
#                 time=time
#             )

#             return JsonResponse({'status': 'success', 'id': writing.game_id}, status=201, json_dumps_params={'ensure_ascii': False})
#         except Exception as e:
#             return JsonResponse({'status': 'error', 'message': str(e)}, status=400, json_dumps_params={'ensure_ascii': False})
#     return JsonResponse({'error': 'Invalid method'}, status=405, json_dumps_params={'ensure_ascii': False})

# zamieniamy to powyzej na dfr:
class FactWritingDatasetViewSet(viewsets.ModelViewSet):
    queryset = FactWritingDataset.objects.all()
    serializer_class = FactWritingDatasetSerializer

@csrf_exempt
def shapes_data_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            student = DimStudent.objects.get(pk=data['student'])

            shapes = FactShapesDataset.objects.create(
                student=student,
                correct=data['correct'],
                incorrect=data['incorrect'],
                time=data['time']
            )

            return JsonResponse({'status': 'success', 'id': shapes.game_id}, status=201, json_dumps_params={'ensure_ascii': False})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400, json_dumps_params={'ensure_ascii': False})
    return JsonResponse({'error': 'Invalid method'}, status=405, json_dumps_params={'ensure_ascii': False})


@csrf_exempt
def emotions_data_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            student = DimStudent.objects.get(pk=data['student'])

            emotions = FactEmotionsDataset.objects.create(
                student=student,
                happy=data['happy'],
                angry=data['angry'],
                sad=data['sad'],
                time=data['time']
            )

            return JsonResponse({'status': 'success', 'id': emotions.game_id}, status=201, json_dumps_params={'ensure_ascii': False})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400, json_dumps_params={'ensure_ascii': False})
    return JsonResponse({'error': 'Invalid method'}, status=405, json_dumps_params={'ensure_ascii': False})


class StudentListView(View):
    def get(self, request):
        students = list(DimStudent.objects.values())
        return JsonResponse(students, safe=False, json_dumps_params={'ensure_ascii': False})


class StudentDetailView(View):
    def get(self, request, pk):
        student = get_object_or_404(DimStudent, pk=pk)
        return JsonResponse({
            "id": student.pk,
            "name": student.name
        }, json_dumps_params={'ensure_ascii': False})


class TeacherListView(View):
    def get(self, request):
        teachers = list(DimTeacher.objects.values())
        return JsonResponse(teachers, safe=False, json_dumps_params={'ensure_ascii': False})


class ParentListView(View):
    def get(self, request):
        parents = list(DimParent.objects.values())
        return JsonResponse(parents, safe=False, json_dumps_params={'ensure_ascii': False})

#  API do tworzenia, edytowania, usuwania, pobierania wszystkich uczniów – bez filtrowania.
class DimStudentViewSet(viewsets.ModelViewSet):
    '''Dzięki temu masz:

        * GET /api/students/ → lista wszystkich uczniów
        * POST /api/students/ → dodanie nowego ucznia
        * PUT /api/students/5/ → edytowanie ucznia
'''
    queryset = DimStudent.objects.all()
    serializer_class = DimStudentSerializer

# Lista uczniów danego nauczyciela
class StudentsByTeacherView(APIView):
    '''
    Ten widok filtruje uczniów po teacher_id, czyli daje tylko uczniów jednej klasy (wychowawcy), np taki endpoint:
        * GET /api/teachers/1/students/ → tylko uczniowie klasy nauczyciela teacher_id = 1
    '''
    def get(self, request, teacher_id):
        try:
            teacher = DimTeacher.objects.get(pk=teacher_id)
            students = DimStudent.objects.filter(class_name=teacher.class_name)
            serializer = DimStudentSerializer(students, many=True)
            return Response(serializer.data)
        except DimTeacher.DoesNotExist:
            return Response({'error': 'Teacher or students list not found'}, status=status.HTTP_404_NOT_FOUND)
