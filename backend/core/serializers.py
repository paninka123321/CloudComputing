from rest_framework import serializers
from .models import ShapesDataset, EmotionsDataset, WritingsDataset
import base64 #for images

class ShapesDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShapesDataset
        fields = '__all__'

class EmotionsDatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmotionsDataset
        fields = '__all__'

class WritingsDatasetSerializer(serializers.ModelSerializer):
    
    image = serializers.CharField(write_only=True)

    class Meta:
        model = WritingsDataset
        fields = '__all__'

    def create(self, validated_data):
        image_data = validated_data.pop('image')
        binary_image = base64.b64decode(image_data)
        return WritingsDataset.objects.create(image=binary_image, **validated_data)