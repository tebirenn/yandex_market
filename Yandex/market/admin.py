from django.contrib import admin
from market.models import Category, Product, Review, OrderHistory, Favorite

# Register your models here.
admin.site.register(Review)
admin.site.register(OrderHistory)
admin.site.register(Favorite)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category', 'properties')
    list_filter = ('category',)