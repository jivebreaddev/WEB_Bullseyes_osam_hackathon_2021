from rest_framework import serializers
from bullseyes_server.models import User, AccessUser
from drf_extra_fields.fields import Base64ImageField
class UserSerializer(serializers.ModelSerializer):
    photourl = Base64ImageField(required=False, use_url=True)
    image_url = serializers.SerializerMethodField('get_photo_url')
    
    class Meta:
        model = User
        fields = ['id','photourl', 'rank', 'name', 'altid', 'company','image_url']
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.photourl.url
        return request.build_absolute_uri(photo_url)
class AccessUserSerializer(serializers.ModelSerializer):
    photourl = Base64ImageField(required=False, use_url=True)
    time = serializers.DateTimeField()
    class Meta:
        model = AccessUser
        
        fields = ['id', 'photourl','place', 'time', 'rank', 'name','altid','company']
    
