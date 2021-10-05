from rest_framework import serializers
from bullseyes_server.models import User, AccessUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'photourl', 'rank', 'name', 'altid', 'company']
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.photourl
        return request.build_absolute_uri(photo_url)
class AccessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessUser
        fields = ['id', 'photourl', 'place', 'time', 'rank', 'name','altid','company']
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.photourl
        return request.build_absolute_uri(photo_url)

