# Generated by Django 4.2 on 2023-05-11 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0004_alter_favorite_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default=1, upload_to='products'),
            preserve_default=False,
        ),
    ]
