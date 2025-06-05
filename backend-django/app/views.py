# views.py (zaktualizowane z DRF i serializerami)
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
import requests
from django.http import JsonResponse
from google.cloud import aiplatform


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

@api_view(['GET'])
def get_parent_email_by_student(request, student_id):
    student = get_object_or_404(DimStudent, pk=student_id)
    parent = student.parent

    if not parent.email:
        return Response({'detail': 'Email not found for parent.'}, status=status.HTTP_404_NOT_FOUND)

    return Response({'parent_email': parent.email})

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
    




from rest_framework.views import APIView
from rest_framework.response import Response
from google.cloud import aiplatform
import requests
import logging

# Inicjalizacja Vertex AI - wykonaj to tylko raz przy starcie
aiplatform.init(project="psychological-app-a359c", location="europe-central2")
# Endpoint do modelu emotions
vertex_endpoint = aiplatform.Endpoint(
    endpoint_name="projects/psychological-app-a359c/locations/europe-central2/endpoints/43404321018085376"
)

# Endpoint do modelu shapes
vertex_shapes_endpoint = aiplatform.Endpoint(
    endpoint_name="projects/psychological-app-a359c/locations/europe-central2/endpoints/592843475557285888"  
)

# Endpoint do modelu questionnaires
vertex_questionnaires_endpoint = aiplatform.Endpoint(
    endpoint_name="projects/psychological-app-a359c/locations/europe-central2/endpoints/608606074253082624"
)
class PredictEmotionsView(APIView):
    def get(self, request):
        try:
            # 1. Pobierz dane z lokalnego API
            response = requests.get("https://psychobackend-312700987588.europe-central2.run.app/fact/emotions_dataset/")
            response.raise_for_status()  # rzuci wyjątek jeśli status != 200
            raw_data = response.json()

            # 2. Przekształć dane do formatu oczekiwanego przez model
            instances = [
                [row["happy"], row["angry"], row["sad"], row["time"]]
                for row in raw_data
            ]


            # 3. Wyślij do modelu
            prediction_response = vertex_endpoint.predict(instances=instances)

            return Response({"predictions": prediction_response.predictions}, status=200)

        except requests.exceptions.RequestException as e:
            logging.error(f"Błąd pobierania danych: {e}")
            return Response({"error": "Błąd pobierania danych z lokalnego API."}, status=502)

        except ValueError as e:
            logging.error(f"Błąd dekodowania JSON: {e}")
            return Response({"error": "Niepoprawny format danych JSON."}, status=400)

        except Exception as e:
            logging.exception("Niespodziewany błąd podczas predykcji.")
            return Response({"error": f"Wystąpił błąd serwera: {str(e)}"}, status=500)

class PredictShapesView(APIView):
    def get(self, request):
        try:
            # 1. Pobierz dane z lokalnego API
            response = requests.get("https://psychobackend-312700987588.europe-central2.run.app/fact/shapes_dataset/")
            response.raise_for_status()
            raw_data = response.json()

            # 2. Mapa czasu
            time_mapping = {
                6: 1.00,
                5: 0.95,
                4: 0.85,
                3: 0.70,
                2: 0.45,
                1: 0.20,
                0: 0.00
            }

            # 3. Przekształć dane do formatu oczekiwanego przez model
            instances = [
                [row["correct"], time_mapping.get(row["czas"], 0.0)]
                for row in raw_data
            ]

            # 4. Wyślij do modelu shapes
            prediction_response = vertex_shapes_endpoint.predict(instances=instances)

            return Response({"predictions": prediction_response.predictions}, status=200)

        except requests.exceptions.RequestException as e:
            logging.error(f"Błąd pobierania danych: {e}")
            return Response({"error": "Błąd pobierania danych z lokalnego API."}, status=502)

        except ValueError as e:
            logging.error(f"Błąd dekodowania JSON: {e}")
            return Response({"error": "Niepoprawny format danych JSON."}, status=400)

        except Exception as e:
            logging.exception("Niespodziewany błąd podczas predykcji.")
            return Response({"error": f"Wystąpił błąd serwera: {str(e)}"}, status=500)
class PredictQuestionnaireView(APIView):
    def get(self, request):
        try:
            # 1. Pobierz dane z lokalnego API
            response = requests.get("https://psychobackend-312700987588.europe-central2.run.app/fact/teacher_survey/")
            response.raise_for_status()
            raw_data = response.json()

            # 2. Lista wymaganych kolumn
            question_keys = [f"Q{i}" for i in range(1, 17)]

            # 3. Przygotuj dane wejściowe jako listy wartości Q1–Q16
            instances = [
                [row.get(key, 0) for key in question_keys]
                for row in raw_data
            ]

            # 4. Wyślij do modelu
            prediction_response = vertex_questionnaires_endpoint.predict(instances=instances)

            return Response({"predictions": prediction_response.predictions}, status=200)

        except requests.exceptions.RequestException as e:
            logging.error(f"Błąd pobierania danych: {e}")
            return Response({"error": "Błąd pobierania danych z lokalnego API."}, status=502)

        except ValueError as e:
            logging.error(f"Błąd dekodowania JSON: {e}")
            return Response({"error": "Niepoprawny format danych JSON."}, status=400)

        except Exception as e:
            logging.exception("Niespodziewany błąd podczas predykcji.")
            return Response({"error": f"Wystąpił błąd serwera: {str(e)}"}, status=500)

