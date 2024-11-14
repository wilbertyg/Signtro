from django.urls import path
from . import views

urlpatterns = [
    path('predict-image/', views.predict_image, name='predict_image'),
]