from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from bullseyes_server.models import User, AccessUser
from bullseyes_server.serializers import UserSerializer, AccessUserSerializer
from rest_framework import permissions, viewsets
from rest_framework import mixins
from . import filters
from rest_framework import status
from rest_framework.response import Response
from rest_framework.settings import api_settings
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
    filterset_class = filters.UserFilter
    search_fields = ["name"]
    permission_classes = [permissions.AllowAny]
    parser_classes = [JSONParser, MultiPartParser, FormParser]

class AccessUserViewSet(mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                mixins.DestroyModelMixin,
                                viewsets.GenericViewSet):
    def create(self, request, *args, **kwargs):
        print(request.data)
        print("hah")
        serializer = self.get_serializer(data=request.data)
        print(request.data)
        print("hah")
        serializer.is_valid(raise_exception=True)
        ###serializer.initial_data['photo'] can be accessed
        # modify them using 
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    # modify these taking in rank, name, other recognition
    def perform_create(self, serializer):
        serializer.save()
        ##serializer.save(owner_id=request.user.id)
    def get_success_headers(self, data):
        try:
            return {'Location': str(data[api_settings.URL_FIELD_NAME])}
        except (TypeError, KeyError):
            return {}
    def update(self, request, *args, **kwargs):
        print(request.data)
        print("hah")
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        # instance -> to model
        #try printit
        
        
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)
class AccessViewSet(AccessUserViewSet):
    queryset = AccessUser.objects.all().order_by('id')
    serializer_class = AccessUserSerializer
    filterset_class = filters.AccessUserFilter
    permission_classes = [permissions.AllowAny]
    search_fields = ["name"]
    parser_classes = [JSONParser, MultiPartParser, FormParser]
# @api_view(['POST','GET'])
# @parser_classes([MultiPartParser,FormParser])
# @permission_classes([permissions.AllowAny])
# def user_list(request,format=None):
#     """
#     List all users, or create an user.
#     """
#     if request.method == 'GET':
#         users = User.objects.all()
#         serializer = UserSerializer(users,context={"request":request}, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = UserSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)

# @api_view(['GET', 'PUT', 'DELETE'])
# @parser_classes([MultiPartParser,FormParser])
# @permission_classes([permissions.AllowAny])
# def user_edit(request,pk,format=None):
#     try:
#         user = User.objects.get(pk=pk)
#     except User.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if request.method == 'GET':
#         serializer = UserSerializer(user)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = UserSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         user.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
    

# @api_view(['POST','GET'])
# @parser_classes([MultiPartParser,FormParser])
# @permission_classes([permissions.AllowAny])
# def accessuser_list(request,format=None):
#     """
#     List all users, or create an user.
#     """
#     if request.method == 'GET':
#         accessusers = AccessUser.objects.all()
#         serializer = AccessUserSerializer(accessusers, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = UserSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)


# @api_view(['GET', 'PUT', 'DELETE'])
# @parser_classes([MultiPartParser,FormParser])
# @permission_classes([permissions.AllowAny])
# def accessuser_edit(request, pk,format=None):
#     try:
#         accessuser = AccessUser.objects.get(pk=pk)
#     except AccessUser.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if request.method == 'GET':
#         serializer = AccessUserSerializer(accessuser)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = AccessUserSerializer(accessuser, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         accessuser.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)



