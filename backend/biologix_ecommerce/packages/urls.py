from django.urls import path
from .views import PackageCreateView, PackageListView, PackageUpdateView, PackageDeleteView, PackageCreateMultiple

urlpatterns = [
    path('packages/create/', PackageCreateView.as_view(), name='package_create'),
    path('packages/', PackageListView.as_view(), name='package_list'),
    path('packages/update/<int:pk>/',
         PackageUpdateView.as_view(), name='package-update'),
    path('packages/delete/<int:pk>/',
         PackageDeleteView.as_view(), name='package-delete'),
    path('packages/create-multiple/',
         PackageCreateMultiple.as_view(), name='package_create_multiple'),
]
