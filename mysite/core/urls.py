from django.urls import path, include
from .views import current_user, UserList
from rest_framework import routers
from .views import HoroscopeViewSet

router = routers.DefaultRouter()
router.register('horoscopes', HoroscopeViewSet)

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('', include(router.urls))
    # path('horoscopes/', )
]