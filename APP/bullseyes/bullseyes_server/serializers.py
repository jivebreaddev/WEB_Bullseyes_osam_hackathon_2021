from rest_framework import serializers
from models import User, AccessUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'photourl', 'rank', 'name', 'altid', 'company']
class AccessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'photourl', 'place', 'time', 'rank', 'name','altid','company']