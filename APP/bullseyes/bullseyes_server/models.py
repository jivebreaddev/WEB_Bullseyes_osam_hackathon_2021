from django.db import models

# Create your models here.
class User:
    id = models.BigAutoField(primary_key=True)
    photourl = models.CharField(max_length=100, blank=True)
    rank = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100, blank=True)
    altid = models.CharField(max_length=100, blank=True)
    company = models.CharField(max_length=100, blank=True)
class AccessUser:
    id = models.BigAutoField(primary_key=True)
    photourl = models.CharField(max_length=100, blank=True)
    place = models.CharField(max_length=100, blank=True)
    time = models.CharField(blank=False, max_length=100)
    rank = models.CharField(blank=False, max_length=100)
    name = models.CharField(blank=False, max_length=100)
    altid = models.CharField(blank=False, max_length=100)    
    company = models.CharField(blank=False, max_length=100)    