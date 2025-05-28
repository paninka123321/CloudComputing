# Serializer is a translator between Djanog models and json files

from rest_framework import serializers
from .models import FactWritingDataset, DimStudent, DimTeacher
import base64 #for images


class FactWritingDatasetSerializer(serializers.ModelSerializer):
    
    image = serializers.CharField(write_only=True)

    class Meta:
        model = FactWritingDataset
        fields = '__all__'

    def create(self, validated_data):
        image_data = validated_data.pop('image')
        binary_image = base64.b64decode(image_data)
        validated_data['png_file'] = binary_image.decode('latin1')  # zapisujemy jako tekst binarny
        return FactWritingDataset.objects.create(image=binary_image, **validated_data)
    

class DimStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DimStudent
        fields = ['student_id', 'name', 'surname', 'age', 'class_name', 'desc', 'avg_behaviour', 'avg_marks']