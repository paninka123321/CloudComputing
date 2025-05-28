from django.urls import path, include
from app import views

router = DefaultRouter()
router.register(r'students', DimStudentViewSet, basename='student')

urlpatterns = [
    path('students/', views.StudentListView.as_view(), name='student_list'),
    path('students/<int:pk>/', views.StudentDetailView.as_view(), name='student_detail'),
    path('teachers/', views.TeacherListView.as_view(), name='teacher_list'),
    path('parents/', views.ParentListView.as_view(), name='parent_list'),
    path('api/writings/', views.writing_data_create, name='writing_data_create'),
    path('api/shapes/', views.shapes_data_create, name='shapes_data_create'),
    path('api/emotions/', views.emotions_data_create, name='emotions_data_create'),
    path('api/', include(router.urls)),
    path('api/teacher/<int:teacher_id>/students/', views.StudentsByTeacherView.as_view()),
]


"""
Gotowe Endpointy (działające automatycznie):
Endpoint	Metoda	Opis
/api/students/	GET	Lista wszystkich uczniów
/api/students/<id>/	GET	Szczegóły ucznia
/api/students/	POST	Dodaj nowego ucznia
/api/students/<id>/	PUT	Zastąp dane ucznia
/api/students/<id>/	PATCH	Zmień tylko część danych
/api/students/<id>/	DELETE	Usuń ucznia
"""