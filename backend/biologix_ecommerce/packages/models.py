from django.db import models

# Create your models here.


class Package(models.Model):
    id = models.AutoField(primary_key=True)
    packageName = models.CharField(max_length=255)
    testDescription = models.CharField(max_length=1000, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=4)
    packageCategory = models.CharField(max_length=255)
    discount = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    discountTag = models.BooleanField(default=False)
    listOfTest = models.JSONField()
    selected = models.BooleanField(default=False)
    tag = models.CharField(max_length=255, null=True, blank=True)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.packageName} - {self.packageCategory}"
