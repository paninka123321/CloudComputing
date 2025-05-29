# Serializer is a translator between Djanog models and json files

from rest_framework import serializers
from .models import FactWritingDataset, DimStudent, DimTeacher
import base64 #for images


class FactWritingDatasetSerializer(serializers.ModelSerializer):
    image = serializers.CharField(write_only=True)  # przyjmujemy obraz jako base64
    student = serializers.PrimaryKeyRelatedField(queryset=DimStudent.objects.all())

    class Meta:
        model = FactWritingDataset
        fields = ['game_id', 'student', 'time', 'image', 'png_file']
        read_only_fields = ['game_id', 'png_file']  # png_file to pole wynikowe (po dekodowaniu)

    def create(self, validated_data):
        # Wyciągamy i dekodujemy obraz
        image_data = validated_data.pop('image')
        decoded_image = base64.b64decode(image_data)
        validated_data['png_file'] = decoded_image.decode('latin1')  # konwersja binarna na string

        return FactWritingDataset.objects.create(**validated_data)    

class DimStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimStudent
        fields = ['student_id', 'name', 'surname', 'age', 'class_name', 'desc', 'avg_behaviour', 'avg_marks']