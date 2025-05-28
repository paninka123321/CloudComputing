from django.urls import path
from app import views

urlpatterns = [
    # Student & related views
    path('students/', views.StudentListView.as_view(), name='student_list'),
    path('students/<int:pk>/', views.StudentDetailView.as_view(), name='student_detail'),

    # Teacher & parent views
    path('teachers/', views.TeacherListView.as_view(), name='teacher_list'),
    path('parents/', views.ParentListView.as_view(), name='parent_list'),

    # POST endpoints (write data)
    path('api/writings/', views.writing_data_create, name='writing_data_create'),
    path('api/shapes/', views.shapes_data_create, name='shapes_data_create'),
    path('api/emotions/', views.emotions_data_create, name='emotions_data_create'),

    # GET endpoints (read fact tables)
    path('fact/writings/', views.WritingDatasetListView.as_view(), name='writing_data_list'),
    path('fact/shapes/', views.ShapesDatasetListView.as_view(), name='shapes_data_list'),
    path('fact/emotions/', views.EmotionsDatasetListView.as_view(), name='emotions_data_list'),
    path('fact/autism_survey/', views.AutismSurveyListView.as_view(), name='autism_survey_list'),
    path('fact/adhd_survey/', views.TeacherSurveyListView.as_view(), name='teacher_survey_list'),
]