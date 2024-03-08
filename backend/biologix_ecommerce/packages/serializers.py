from rest_framework import serializers
from .models import Package
from rest_framework.reverse import reverse


class PackageSerializer(serializers.ModelSerializer):
    update_url = serializers.SerializerMethodField(read_only=True)
    delete_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Package
        fields = [
            "id",
            "packageName",
            "testDescription",
            "price",
            "packageCategory",
            "discount",
            "discountTag",
            "listOfTest",
            "selected",
            "tag",
            "approved",
            "update_url",
            "delete_url"
        ]

    def get_update_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("package-update", kwargs={"pk": obj.pk}, request=request)

    def get_delete_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("package-delete", kwargs={"pk": obj.pk}, request=request)
    # to validate our serializers we define functions def validate_<field_name>

    def validate_packageName(self, value):
        qs = Package.objects.filter(packageName__exact=value)
        if qs.exists():
            raise serializers.ValidationError(f'{value} already exists')
        return value
