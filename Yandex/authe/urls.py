from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

urlpatterns = [
    path(
        'token/',
        TokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path(
        'token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),
    path(
        'test/',
        views.SomeProtectedViewSet.as_view({
            'get': 'test'
        }),
        name='test'
    ),
    path(
        'user/', views.UserViewSet.as_view({
            'get': 'retrieve',
            'post': 'create'
        })
    ),
]
