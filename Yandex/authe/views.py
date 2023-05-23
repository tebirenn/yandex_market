from django.contrib.auth.models import User
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from authe.serializers import UserCreateRequestSerializer, UserRetrieveSerializer


# Create your views here.


class SomeProtectedViewSet(GenericViewSet):
    permission_classes = [IsAuthenticated]

    def test(self, request, *args, **kwargs):
        return Response(status=200, data={'message': 'Hello World'})


class UserViewSet(
    GenericViewSet,
    mixins.CreateModelMixin,
):
    def get_queryset(self):
        if self.action == 'retrieve':
            return User.objects.filter(id=self.request.user.id).first()
        return User.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return UserCreateRequestSerializer
        elif self.action == 'retrieve':
            return UserRetrieveSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_queryset()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    