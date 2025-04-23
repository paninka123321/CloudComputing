from django.urls import path
from .views import *

urlpatterns = [
    path("hello/", hello_api),
        path('api/shapes/', ShapesDatasetView.as_view(), name='shapes'),
    path('api/emotions/', EmotionsDatasetView.as_view(), name='emotions'),
    path('api/writings/', WritingsDatasetView.as_view(), name='writings'),
]

