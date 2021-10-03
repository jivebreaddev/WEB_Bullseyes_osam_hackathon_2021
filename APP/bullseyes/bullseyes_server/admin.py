from django.contrib import admin
from .models import User, AccessUser
# Register your models here.
admin.site.register(User)
admin.site.register(AccessUser)