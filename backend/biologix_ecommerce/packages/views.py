
from rest_framework import generics, authentication, permissions
from .serializers import PackageSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Package
# Create your views here.


class PackageCreateView(generics.CreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer


class PackageListView(generics.ListAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PackageUpdateView(generics.UpdateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PackageDeleteView(generics.DestroyAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer


class PackageCreateMultiple(generics.ListCreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

    def post(self, request, format=None):
        # Assuming the request data is a list of package objects
        packages_data = request.data
        serializer = PackageSerializer(data=packages_data, many=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
