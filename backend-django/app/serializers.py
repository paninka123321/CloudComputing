# serializers.py
from rest_framework import serializers
from .models import (
    DimStudent, DimTeacher, DimParent,
    FactWritingDataset, FactTeacherSurveyDataset,
    FactShapesDataset, FactEmotionsDataset, FactAutismTeacherSurveyDataset
)

class DimStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimStudent
        fields = '__all__'

class DimTeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimTeacher
        fields = '__all__'

class DimParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimParent
        fields = '__all__'

class FactWritingDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactWritingDataset
        fields = '__all__'

class FactShapesDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactShapesDataset
        fields = '__all__'

class FactEmotionsDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactEmotionsDataset
        fields = '__all__'

class FactAutismTeacherSurveyDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactAutismTeacherSurveyDataset
        fields = '__all__'

class FactTeacherSurveyDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactTeacherSurveyDataset
        fields = '__all__'