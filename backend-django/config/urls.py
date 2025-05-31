from django.contrib import admin
from django.urls import path
from app.views import (
    StudentListView, StudentDetailView, TeacherListView, ParentListView,
    WritingDataCreateView, ShapesDataCreateView, EmotionsDataCreateView,
    WritingDatasetListView, ShapesDatasetListView, EmotionsDatasetListView,
    AutismSurveyListView, TeacherSurveyListView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', StudentListView.as_view(), name='student_list'),
    path('students/<int:pk>/', StudentDetailView.as_view(), name='student_detail'),

    path('teachers/', TeacherListView.as_view(), name='teacher_list'),
    path('parents/', ParentListView.as_view(), name='parent_list'),

    path('api/writings/', WritingDataCreateView.as_view(), name='writing_data_create'),
    path('api/shapes/', ShapesDataCreateView.as_view(), name='shapes_data_create'),
    path('api/emotions/', EmotionsDataCreateView.as_view(), name='emotions_data_create'),

    path('fact/writings/', WritingDatasetListView.as_view(), name='writing_data_list'),
    path('fact/shapes/', ShapesDatasetListView.as_view(), name='shapes_data_list'),
    path('fact/emotions/', EmotionsDatasetListView.as_view(), name='emotions_data_list'),
    path('fact/autism_survey/', AutismSurveyListView.as_view(), name='autism_survey_list'),
    path('fact/adhd_survey/', TeacherSurveyListView.as_view(), name='teacher_survey_list'),
]