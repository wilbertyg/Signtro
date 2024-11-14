from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import base64
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from PIL import Image
from io import BytesIO

from datetime import datetime
from .model_function import predict

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def predict_image(request):
    imageData = request.data.get("image", "")
    correctAns = request.data.get("ans", "")
    try:
        imageData = imageData.split(",")[1]
        imageBytes = base64.b64decode(imageData)
        image = Image.open(BytesIO(imageBytes))
        result, detectedAccuracy, targetAccuracy = predict(image, correctAns)
        return Response({"result":result, "detectedAccuracy": detectedAccuracy, "targetAccuracy": targetAccuracy}, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)