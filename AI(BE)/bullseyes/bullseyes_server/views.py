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
from PIL import Image
from io import BytesIO
import base64
import re
from facenet_pytorch import MTCNN
from PIL import Image
import numpy
import torch
import sys
import pickle
import bullseyes_server.model as model
sys.path.append('/APP/bullseyes_server/')
device = torch.device('cuda:1' if torch.cuda.is_available() else 'cpu')
mtcnn = MTCNN(image_size=128,margin=0)
# img_image2 = mtcnn(img2,save_path='single_image.jpg')
# img_embedding2 = facenet(img_image2.unsqueeze(0))
checkpoint = torch.load('/APP/InceptionResNetV1_ArcFace.pt')
facenet = checkpoint.model
facenet.to(device)
facenet.eval()
db = {}
with open('/APP/embeddings.p', 'rb') as f:
    db = pickle.load(f)
def img_to_embedding(img, facenet):
    image_cropped = mtcnn(img,save_path='single_image.jpg')
    img_embedding = facenet(image_cropped.unsqueeze(0))
    return img_embedding

def l2distance(input_embedding, output_embedding):
  dist = numpy.linalg.norm(input_embedding.detach().numpy()-output_embedding.detach().numpy())
  return dist
class UserViewSet(mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                mixins.DestroyModelMixin,
                                viewsets.GenericViewSet):
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response({'data':serializer.data})
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        ###serializer.initial_data['photourl'] can be accessed
        # modify them using 
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({'data':serializer.data}, status=status.HTTP_201_CREATED, headers=headers)
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

        return Response({'data':serializer.data})

    def perform_update(self, serializer):
        serializer.save()

    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)
class AccessUserViewSet(mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                mixins.DestroyModelMixin,
                                viewsets.GenericViewSet):
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            for a in serializer.data:
                a['photourl'] =  a['photourl'].replace("http://localhost", "https://osamhack2021-ai-web-bullseyes-bullseyes-7v5x5w6jwfx5xj-8000.githubpreview.dev")
            
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        for a in serializer.data:
            a['photourl'] =  a['photourl'].replace("http://localhost", "https://osamhack2021-ai-web-bullseyes-bullseyes-7v5x5w6jwfx5xj-8000.githubpreview.dev")
        return Response({'data':serializer.data})
    def create(self, request, *args, **kwargs):

        
            
        
        image_data = re.sub('^data:image/.+;base64,', '', request.data['photourl'])
        im = Image.open(BytesIO(base64.b64decode(image_data)))
        im.save("/APP/media/" + str(1) + '.jpg')
        im = Image.open("/APP/media/" + str(1) + '.jpg')
        img_embedding = img_to_embedding(im,facenet)
        identity = ""
        minimum = 100.0
        for key, value in db.items():
        
            if l2distance(img_embedding, db[key]) < minimum:
                minimum = l2distance(img_embedding, db[key])
                identity = key
        print(identity[:2])
        if minimum > 0.8:
            data= {
                'id': 3,
                'photourl':request.data['photourl'],
                'place': "중요한 기관",
                'time': request.data['time'],
                'rank': "미확인 자",
                'name': "미확인 자",
                'altid': "미확인 자",
                'company': "미확인 자",
            }
            serializer = self.get_serializer(data=data)
            
            serializer.is_valid(raise_exception=True)
            ###serializer.initial_data['photourl'] can be accessed
            # modify them using 
            self.perform_create(serializer)
        
            headers = self.get_success_headers(serializer.data)
            return Response({'data':serializer.data}, status=status.HTTP_201_CREATED, headers=headers)
        else:

            instance = User.objects.get(name=identity[:3])
            name = instance.name
            data= {
                'id': 3,
                'photourl':request.data['photourl'],
                'place': "중요한 기관",
                'time': request.data['time'],
                'rank': instance.rank,
                'name': instance.name,
                'altid': instance.altid,
                'company': instance.company,
            }
            print(data)
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
        ###serializer.initial_data['photourl'] can be accessed
        # modify them using 
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response({'data':serializer.data}, status=status.HTTP_201_CREATED, headers=headers)
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

        return Response({'data':serializer.data})

    def perform_update(self, serializer):
        serializer.save()

    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)
class UserViewSet(UserViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
    filterset_class = filters.UserFilter
    permission_classes = [permissions.AllowAny]
    parser_classes = [JSONParser, MultiPartParser, FormParser]


class AccessViewSet(AccessUserViewSet):
    queryset = AccessUser.objects.all().order_by('id')
    serializer_class = AccessUserSerializer
    filterset_class = filters.AccessUserFilter
    permission_classes = [permissions.AllowAny]
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



