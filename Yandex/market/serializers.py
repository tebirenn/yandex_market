from rest_framework import serializers

from market.models import Product, Favorite


class CategoryListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class ProductListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    image = serializers.ImageField()
    price = serializers.IntegerField()
    properties = serializers.JSONField()


class FavoriteCreateSerializer(serializers.ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product',
    )
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault(),
    )

    def validate_product_id(self, value):
        if Favorite.objects.filter(product=value, user=self.context['request'].user).exists():
            raise serializers.ValidationError('Already exists')
        return value

    class Meta:
        model = Favorite
        fields = ('id', 'product_id', 'user')
