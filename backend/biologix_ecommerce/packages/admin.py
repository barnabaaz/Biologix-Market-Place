from django.contrib import admin
from .models import Package
# Register your models here.


class PackageAdmin(admin.ModelAdmin):
    pass


admin.site.register(Package, PackageAdmin)
