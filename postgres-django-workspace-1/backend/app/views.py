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

######### API endpoints #########

@csrf_exempt
def writing_data_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            student_id = data.get('student')
            image_uri = data.get('image')
            time = data.get('time')

            student = DimStudent.objects.get(pk=student_id)

            writing = FactWritingDataset.objects.create(
                student=student,
                png_file=image_uri,
                time=time
            )

            return JsonResponse({'status': 'success', 'id': writing.game_id}, status=201, json_dumps_params={'ensure_ascii': False})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400, json_dumps_params={'ensure_ascii': False})
    return JsonResponse({'error': 'Invalid method'}, status=405, json_dumps_params={'ensure_ascii': False})


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
