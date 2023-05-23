from django.urls import path

from market import views

urlpatterns = [
    path(
        'categories/',
        views.CategoryViewSet.as_view({
            'get': 'list'
        }),
    ),
    path(
        'categories/<int:category_id>/products/',
        views.CategoryProductViewSet.as_view({
            'get': 'list'
        }),
    ),
    path(
        'products/',
        views.ProductViewSet.as_view({
            'get': 'list'
        }),
    ),
    path(
        'favorites/',
        views.FavoriteViewSet.as_view({
            'post': 'create',
            'get': 'list',
        }),
    ),
    path(
        'favorites/<int:favorite_id>/',
        views.FavoriteViewSet.as_view({
            'delete': 'destroy',
        }),
    ),
]
