from django.db import models
import os
# Create your models here.
def upload_to(instance, filename):
    base, extension = os.path.splitext(filename.lower())
    return f"images/{instance.pk}{extension}"

class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    photourl = models.ImageField(max_length=100,upload_to=upload_to, blank=True)
    rank = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, blank=True)
    altid = models.CharField(max_length=100, blank=True)
    company = models.CharField(max_length=100, blank=True)
    

class AccessUser(models.Model):
    id = models.BigAutoField(primary_key=True)
    photourl = models.ImageField(max_length=100,upload_to=upload_to, blank=True)
    place = models.CharField(max_length=100, blank=True)
    time = models.DateTimeField(blank=True)
    rank = models.CharField(blank=True, max_length=100)
    name = models.CharField(blank=True, max_length=100)
    altid = models.CharField(blank=True, max_length=100)    
    company = models.CharField(blank=True, max_length=100)    