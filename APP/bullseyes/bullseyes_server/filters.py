import django_filters
from bullseyes_server.models import User, AccessUser
from django.db import models

class UserFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name="name", lookup_expr="contains")
    class Meta:
        model = User
        fields = ["name"]


class AccessUserFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name="name", lookup_expr="contains")
    time = django_filters.IsoDateTimeFilter()
    #rangedate = 
    class Meta:
        model = AccessUser
        fields ={
            'name': ['exact', 'contains'],
            'time': ['exact', 'gte','lte','range'],
        }
        filter_overrides = {
        models.DateTimeField: {
            'filter_class': django_filters.IsoDateTimeFilter
        }
        }