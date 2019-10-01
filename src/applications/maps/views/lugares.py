
# Django
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView

# Rest framework
from rest_framework import viewsets

# Models
from applications.maps.models import FoodLocation

# Serializers
from applications.maps.serializers import FoodLocationSerializer


class Lugares(TemplateView):
    template_name='maps/map.html'


class LugaresViewSet(viewsets.ModelViewSet):
    """Vista para hacer un CRUD con los lugares de comida"""
    queryset = FoodLocation.objects.all()
    serializer_class = FoodLocationSerializer
