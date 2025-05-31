from django.contrib import admin
from django.urls import path
from app.views import (
    StudentListView, StudentDetailView, TeacherListView, ParentListView,
    WritingDataCreateView, ShapesDataCreateView, EmotionsDataCreateView,
    TeacherCreateView, ParentCreateView, StudentCreateView,
    WritingDatasetListView, ShapesDatasetListView, EmotionsDatasetListView,
    AutismSurveyListView, TeacherSurveyListView,
    AutismSurveyCreateView, TeacherSurveyCreateView  
)

urlpatterns = [
    path('admin/', admin.site.urls),
    # users
    path('students/', StudentListView.as_view(), name='student_list'),
    path('teachers/', TeacherListView.as_view(), name='teacher_list'),
    path('parents/', ParentListView.as_view(), name='parent_list'),
    path('students/<int:pk>/', StudentDetailView.as_view(), name='student_detail'),

    # POST endpoints (create)
    path('api/students/', StudentCreateView.as_view(), name='students_create'),
    path('api/teachers/', TeacherCreateView.as_view(), name='teacher_create'),
    path('api/parents/', ParentCreateView.as_view(), name='parent_create'),
    path('api/writings/', WritingDataCreateView.as_view(), name='writing_data_create'),
    path('api/shapes/', ShapesDataCreateView.as_view(), name='shapes_data_create'),
    path('api/emotions/', EmotionsDataCreateView.as_view(), name='emotions_data_create'),
    path('api/autism_survey/', AutismSurveyCreateView.as_