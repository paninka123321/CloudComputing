from rest_framework import serializers
from .models import Uczen, WynikGry

class UczenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uczen
        fields = '__all__'

class WynikGrySerializer(serializers.ModelSerializer):
    class Meta:
        model = WynikGry
        fields = '__all__'
