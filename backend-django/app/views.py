# views.py (zaktualizowane z DRF i serializerami)
from rest_framework import generics, status
from rest_framework.views import APIView
from collections import Counter
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import get_authorization_header
from firebase_admin import auth as firebase_auth
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
    serializer_class = DimStudentSerializer

    def get_queryset(self):
        user_email = self.request.user.email  # lub metoda z tokenem
        teacher = DimTeacher.objects.get(email=user_email)
        return DimStudent.objects.filter(class_name=teacher.class_name, school_name=teacher.school_name)


class StudentDetailView(generics.RetrieveUpdateAPIView):
    queryset = DimStudent.objects.all()
    serializer_class = DimStudentSerializer
    permission_classes = [IsAuthenticated]
    def get(self, request, student_id):
        user_email = self._get_user_email_from_token(request)
        if isinstance(user_email, Response):
            return user_email  # return error response

        try:
            teacher = DimTeacher.objects.get(email=user_email)
        except DimTeacher.DoesNotExist:
            return Response({"detail": "Teacher not found."}, status=404)

        try:
            student = DimStudent.objects.get(pk=student_id)
        except DimStudent.DoesNotExist:
            return Response({"detail": "Student not found."}, status=404)

        # Optional: enforce that teacher can access only students from their class/school
        if (student.class_name != teacher.class_name or
                getattr(student, 'school_name', None) != teacher.school_name):
            return Response({"detail": "Access denied."}, status=403)

        serializer = DimStudentSerializer(student)
        return Response(serializer.data)

    def patch(self, request, student_id):
        user_email = self._get_user_email_from_token(request)
        if isinstance(user_email, Response):
            return user_email

        try:
            teacher = DimTeacher.objects.get(email=user_email)
        except DimTeacher.DoesNotExist:
            return Response({"detail": "Teacher not found."}, status=404)

        try:
            student = DimStudent.objects.get(pk=student_id)
        except DimStudent.DoesNotExist:
            return Response({"detail": "Student not found."}, status=404)

        # Sprawdź, czy nauczyciel ma dostęp do ucznia
        if (student.class_name != teacher.class_name or
                getattr(student, 'school_name', None) != teacher.school_name):
            return Response({"detail": "Access denied."}, status=403)

        # 🔒 Wymuszenie class_name zgodnych z nauczycielem
        data = request.data.copy()
        data['class_name'] = teacher.class_name


        serializer = DimStudentSerializer(student, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def create(self, request, *args, **kwargs):
        user_email = self._get_user_email_from_token(request)
        if isinstance(user_email, Response):
            return user_email  # error w tokenie

        try:
            teacher = DimTeacher.objects.get(email=user_email)
        except DimTeacher.DoesNotExist:
            return Response({"detail": "Teacher not found."}, status=status.HTTP_404_NOT_FOUND)

        data = request.data.copy()
        data['class_name'] = teacher.class_name
        # jeśli masz `school_name` w modelu studenta, dodaj:
        # data['school_name'] = teacher.school_name

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def _get_user_email_from_token(self, request):
        auth_header = get_authorization_header(request).split()
        if not auth_header or auth_header[0].lower() != b'bearer':
            return Response({"detail": "Missing or invalid token header"}, status=401)

        try:
            decoded_token = firebase_auth.verify_id_token(auth_header[1].decode())
            return decoded_token.get("email")
        except Exception:
            return Response({"detail": "Invalid Firebase token"}, status=401)

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
    def get(self, request, student_id):
        try:
            raw_data = FactEmotionsDataset.objects.filter(student_id=student_id).values("happy", "angry", "sad", "time")
            instances = [
                [row["happy"], row["angry"], row["sad"], float(row["time"])]
                for row in raw_data
            ]
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
    def get(self, request, student_id):
        try:
            raw_data = FactShapesDataset.objects.filter(student_id=student_id).values("correct", "time")
            instances = [
                [float(row["correct"]) / 6.0 if row["correct"] else 0.0, float(row["time"])]
                for row in raw_data
            ]
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

class PredictQuestionnaire1View(APIView):
    def get(self, request, student_id):
        try:
            question_keys = [f"q{i}" for i in range(1, 17)]
            data = FactAutismTeacherSurveyDataset.objects.filter(student_id=student_id).values(*question_keys).first()
            if not data:
                return Response({"error": "No data for given student"}, status=404)

            instance = [[data.get(k, 0) or 0 for k in question_keys]]
            prediction_response = vertex_questionnaires_endpoint.predict(instances=instance)
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
        

class PredictQuestionnaire2View(APIView):
    def get(self, request, student_id):
        try:
            question_keys = [f"q{i}" for i in range(1, 17)]
            data = FactTeacherSurveyDataset.objects.filter(student_id=student_id).values(*question_keys).first()
            if not data:
                return Response({"error": "No data for given student"}, status=404)

            instance = [[data.get(k, 0) or 0 for k in question_keys]]
            prediction_response = vertex_questionnaires_endpoint.predict(instances=instance)
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


class PredictEnsembleView(APIView):
    def get(self, request, student_id):
        try:
            predictions = []

            # 1. Predict emotions
            raw_emotions = FactEmotionsDataset.objects.filter(student_id=student_id).values("happy", "angry", "sad", "time")
            emotion_instances = [
                [row["happy"], row["angry"], row["sad"], float(row["time"])]
                for row in raw_emotions
            ]
            if emotion_instances:
                emotion_result = vertex_endpoint.predict(instances=emotion_instances)
                predictions += [round(p) for p in emotion_result.predictions]

            # 2. Predict shapes
            raw_shapes = FactShapesDataset.objects.filter(student_id=student_id).values("correct", "time")
            shape_instances = [
                [float(row["correct"] or 0) / 6.0, float(row["time"])]
                for row in raw_shapes
            ]
            if shape_instances:
                shape_result = vertex_shapes_endpoint.predict(instances=shape_instances)
                predictions += [round(p) for p in shape_result.predictions]

            # 3. Predict questionnaire - autism
            question_keys = [f"q{i}" for i in range(1, 17)]
            data_autism = FactAutismTeacherSurveyDataset.objects.filter(student_id=student_id).values(*question_keys).first()
            if data_autism:
                autism_instance = [[data_autism.get(k, 0) or 0 for k in question_keys]]
                autism_result = vertex_questionnaires_endpoint.predict(instances=autism_instance)
                predictions += [round(p) for p in autism_result.predictions]

            # 4. Predict questionnaire - ADHD
            data_adhd = FactTeacherSurveyDataset.objects.filter(student_id=student_id).values(*question_keys).first()
            if data_adhd:
                adhd_instance = [[data_adhd.get(k, 0) or 0 for k in question_keys]]
                adhd_result = vertex_questionnaires_endpoint.predict(instances=adhd_instance)
                predictions += [round(p) for p in adhd_result.predictions]

            if not predictions:
                return Response({"error": "Brak danych do agregacji predykcji."}, status=404)

            # Majority vote
            counter = Counter(predictions)
            negative_count = counter.get(-1, 0)
            positive_count = counter.get(1, 0)
            total = negative_count + positive_count

            if total == 0:
                score = None  
            else:
                score = negative_count / total

            return Response({
                "predictions": predictions,
                "negative_ratio": score 
            }, status=200)

        except Exception as e:
            logging.exception("Błąd podczas predykcji ensemble.")
            return Response({"error": str(e)}, status=500)
