from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("courses", views.courses, name="courses"),
    path("challenges", views.challenges, name="challenges")
]