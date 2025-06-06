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
        fields = ['student_id', 'name', 'surname', 'class_name', 'age', 'parent_id', 'description', 'avg_behaviour', 'avg_marks', 'teacher_id']   
        read_only_fields = ['student_id']

class DimTeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimTeacher
        fields = ['teacher_id', 'name', 'surname', 'education', 'subject', 'age', 'sex', 'class_name', 'school_name', 'email']   
        read_only_fields = ['teacher_id']

class DimParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimParent
        fields = ['parent_id', 'name', 'surname', 'age', 'work', 'phone', 'email']
        read_only_fields = ['parent_id']

class FactEmotionsDatasetSerializer(serializers.ModelSerializer):
    student_id = serializers.PrimaryKeyRelatedField(queryset=DimStudent.objects.all())

    class Meta:
        model = FactEmotionsDataset
        fields = ['game_id', 'student_id', 'happy', 'angry', 'sad', 'time']
        read_only_fields = ['game_id']


class FactWritingDatasetSerializer(serializers.ModelSerializer):
    student_id = serializers.PrimaryKeyRelatedField(queryset=DimStudent.objects.all())

    class Meta:
        model = FactWritingDataset
        fields = ['game_id', 'student_id', 'png_file', 'time']
        read_only_fields = ['game_id']


class FactShapesDatasetSerializer(serializers.ModelSerializer):
    student_id = serializers.PrimaryKeyRelatedField(queryset=DimStudent.objects.all())

    class Meta:
        model = FactShapesDataset
        fields = ['game_id', 'student_id', 'correct', 'incorrect', 'time']
        read_only_fields = ['game_id']


# surveys

class FactAutismTeacherSurveyDatasetSerializer(serializers.ModelSerializer):
    student_id = serializers.PrimaryKeyRelatedField(queryset=DimStudent.objects.all())
    class Meta:
        model = FactAutismTeacherSurveyDataset
        fields = '__all__'

class FactTeacherSurveyDatasetSerializer(serializers.ModelSerializer):
    student_id = serializers.PrimaryKeyRelatedField(queryset=DimStudent.objects.all())
    class Meta:
        model = FactTeacherSurveyDataset
        fields = '__all__'