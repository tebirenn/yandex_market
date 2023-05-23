from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import GenericViewSet

from market.models import Category, Product, Favorite
from market.serializers import CategoryListSerializer, ProductListSerializer, FavoriteCreateSerializer


# Create your views here.

class CategoryViewSet(
    GenericViewSet,
    mixins.ListModelMixin,
):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.action == 'list':
            return Category.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return CategoryListSerializer


class CategoryProductViewSet(
    GenericViewSet,
    mixins.ListModelMixin,
):
    lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        if self.action == 'list':
            return Product.objects.filter(category=self.kwargs['category_id'])

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer


class ProductViewSet(
    GenericViewSet,
    mixins.ListModelMixin,
):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.action == 'list':
            return Product.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer


class FavoriteViewSet(
    GenericViewSet,
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin
):
    lookup_url_kwarg = 'favorite_id'
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.action == 'create':
            return Product.objects.all()
        if self.action == 'destroy':
            return Favorite.objects.all()
        if self.action == 'list':
            return Product.objects.prefetch_related("favorites").filter(favorites__user_id=self.request.user).all()

    def get_serializer_class(self):
        if self.action == 'create':
            return FavoriteCreateSerializer
        if self.action == 'list':
            return ProductListSerializer
