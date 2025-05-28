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
def shape