from django.db import models

# Create your models here.
def upload_to(instance, filename):
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"images/{instance.pk}/{now:%Y%m%d%H%M%S}{extension}"

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
    time = models.CharField(blank=False, max_length=100)
    rank = models.CharField(blank=False, max_length=100)
    name = models.CharField(blank=False, max_length=100)
    altid = models.CharField(blank=False, max_length=100)    
    company = models.CharField(blank=False, max_length=100)    