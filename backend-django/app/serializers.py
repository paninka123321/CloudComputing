# serializers.py
from rest_framework import serializers
from .models import (
    DimStudent, DimTeacher, DimParent,
    FactWritingDataset, FactTeacherSurveyDataset,
    FactShapesDataset, FactEmotionsDataset, FactAutismTeacherSurveyDataset
)

from rest_framework import serializers

class DimParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimParent
        fields = ['parent_id', 'name', 'surname', 'email', 'phone']

# nested serializer - laczacy z parentem
class DimStudentSerializer(serializers.ModelSerializer):
    class_name = serializers.CharField(read_only=True)  # pole do odczytu, nie wymagane od klienta

    class Meta:
        model = DimStudent
        fields = ['student_id', 'name', 'surname', 'class_name', 'age', 'parent', 'description', 'avg_behaviour', 'avg_marks']
        read_only_fields = ['student_id']

    def create(self, validated_data):
        parent_data = validated_data.pop('parent', None)
        validated_data.pop('class_name', None)
        validated_data.pop('teacher', None)
        
        # Pobieramy nauczyciela z kontekstu 
        teacher = self.context.get('teacher')
        if not teacher:
            raise serializers.ValidationError({"error": "Brak nauczyciela w kontekście"})

        # Tworzymy rodzica, jeśli podano dane
        parent_obj = None
        if parent_data:
            parent_obj = DimParent.objects.create(**parent_data)

        # Tworzymy ucznia z automatycznym przypisaniem teacher i class_name
        student = DimStudent.objects.create(
            **validated_data,
            class_name=teacher.class_name,
            teacher=teacher,
            parent=parent_obj
        )
        return student


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