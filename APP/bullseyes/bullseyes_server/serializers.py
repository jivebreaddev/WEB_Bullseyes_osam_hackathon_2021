from rest_framework import serializers
from bullseyes_server.models import User, AccessUser
from drf_extra_fields.fields import Base64ImageField
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        photourl = Base64ImageField(required=False)
        fields = ['id', 'rank', 'name', 'altid', 'company']
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.photourl
        return request.build_absolute_uri(photo_url)
class AccessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessUser
        photourl = Base64ImageField(required=False)
        fields = ['id', 'place', 'time', 'rank', 'name','altid','company']
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.photourl
        return request.build_absolute_uri(photo_url)

