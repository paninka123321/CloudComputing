from django.contrib import admin
from django.urls import path
from app.views import (
    StudentListView, StudentDetailView, TeacherListView, ParentListView,
    WritingDataCreateView, ShapesDataCreateView, EmotionsDataCreateView,
    TeacherCreateView, ParentCreateView, StudentCreateView,
    WritingDatasetListView, ShapesDatasetListView, EmotionsDatasetListView,
    AutismSurveyListView, TeacherSurveyListView,
    AutismSurveyCreateView, TeacherSurveyCreateView,
    TeacherStudentListView, PredictEmotionsView
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # GET users
    path('students/', StudentListView.as_view(), name='student_list'),
    path('teachers/', TeacherListView.as_view(), name='teacher_list'),
    path('parents/', ParentListView.as_view(), name='parent_list'),
    path('teacher/students/', TeacherStudentListView.as_view(), name='teacher-students'),
    path('students/<int:pk>/', StudentDetailView.as_view(), name='student_detail'),

    # POST endpoints (create)
    path('api/students/', StudentCreateView.as_view(), name='students_create'),
    path('api/teachers/', TeacherCreateView.as_view(), name='teacher_create'),
    path('api/parents/', ParentCreateView.as_view(), name='parent_create'),
    path('api/writings/', WritingDataCreateView.as_view(), name='writing_data_create'),
    path('api/shapes/', ShapesDataCreateView.as_view(), name='shapes_data_create'),
    path('api/emotions/', EmotionsDataCreateView.as_view(), name='emotions_data_create'),
    path('api/autism_survey/', AutismSurveyCreateView.as_view(), name='emotions_data_create'),
    path('api/teacher_survey/', TeacherSurveyCreateView.as_view(), name='teacher_survey_create'),

    # GET games and quests data (list)
    path('fact/writing_dataset/', WritingDatasetListView.as_view(), name='writing_dataset_list'),
    path('fact/shapes_dataset/', ShapesDatasetListView.as_view(), name='shapes_dataset_list'),
    path('fact/emotions_dataset/', EmotionsDatasetListView.as_view(), name='emotions_dataset_list'),
    path('fact/autism_survey/', AutismSurveyListView.as_view(), name='autism_survey_list'),
    path('fact/teacher_survey/', TeacherSurveyListView.as_view(), name='teacher_survey_list'),

    #MODEL
    path('predict_emotions/', PredictEmotionsView.as_view(), name='predict_emotions')
    ]
    
