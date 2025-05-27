from django.urls import path
from app import views

urlpatterns = [
    path('students/', views.StudentListView.as_view(), name='student_list'),
    path('students/<int:pk>/', views.StudentDetailView.as_view(), name='student_detail'),
    path('teachers/', views.TeacherListView.as_view(), name='teacher_list'),
    path('parents/', views.ParentListView.as_view(), name='parent_list'),
    path('api/writings/', views.writing_data_create, name='writing_data_create'),
    path('api/shapes/', views.shapes_data_create, name='shapes_data_create'),
    path('api/emotions/', views.emotions_data_create, name='emotions_data_create'),
]