import django_filters
from bullseyes_server.models import User, AccessUser


class UserFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name="name", lookup_expr="contains")

    class Meta:
        model = User
        fields = ["name"]


class AccessUserFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name="name", lookup_expr="contains")

    class Meta:
        model = AccessUser
        fields = ["name"]