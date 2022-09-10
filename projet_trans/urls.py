"""projet_trans URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from api.api import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api_user/',api_user,name="user"),
    path('api_sondage/',api_sondage,name="sondages"),
    path('api_optionreponse/',api_optionreponse,name="option_reponse"),
    path('api_parametre/',api_parametre,name="parametre"),
    path('api_question/',api_question,name="question"),
    path('api_page/',api_page,name="page"),
    path('api_reponseenquête/',api_reponseenquête,name="reponse_enquete"),
    path('api_repondant/',api_repondant,name='repondant'),
    path('api_reponse/',api_reponse,name="reponse"),
    path('api_admin/',api_admin,name="admin"),
    path(' api_theme/', api_theme,name="theme"),
    path('api_modele_personnalisable/',api_modele_personnalisable,name='personnalisable'),
    path('Question_predefinie/',api_question_predefinie,name='predefini')



]
