from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from bullseyes_server.models import User, AccessUser
from bullseyes_server.serializers import UserSerializer, AccessUserSerializer

@api_view(['POST','GET'])
@parser_classes([MultiPartParser,FormParser])
def user_list(request,format=None):
    """
    List all users, or create an user.
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users,context={"request":request}, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
@parser_classes([MultiPartParser,FormParser])
def user_edit(request,pk,format=None):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['POST','GET'])
@parser_classes([MultiPartParser,FormParser])
def accessuser_list(request,format=None):
    """
    List all users, or create an user.
    """
    if request.method == 'GET':
        accessusers = AccessUser.objects.all()
        serializer = AccessUserSerializer(accessusers, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
@parser_classes([MultiPartParser,FormParser])
def accessuser_edit(request, pk,format=None):
    try:
        accessuser = AccessUser.objects.get(pk=pk)
    except AccessUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = AccessUserSerializer(accessuser)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AccessUserSerializer(accessuser, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        accessuser.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)