from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class SondageSerializer(serializers.ModelSerializer):

    class Meta:
        model = sondage
        fields = '__all__'

# #Kikia
#class Type_questionSerializer(serializers.ModelSerializer):
 #   class Meta:
 #       model=Type_question
  #      fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Question
        fields = "__all__"

class Option_reponseSerializer(serializers.ModelSerializer):
     class Meta:
        model=Option_reponse
        fields = '__all__'

class ParametreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Parametre
        fields = '__all__'

# #Fama



class PageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Page
        fields = "__all__"


class Reponse_enqueteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reponse_enquete
        fields = "__all__"

# #Fatou Mboup
class AdminSerializer(serializers.ModelSerializer):

    class Meta:
        model = Admin
        fields = '__all__'

class ReponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reponse
        fields = '__all__'

class RepondantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Repondant
        fields = '__all__'

class ThemeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Theme
        fields = '__all__'

class Modele_personnalisableSerializer(serializers.ModelSerializer):

    class Meta:
        model = Modele_personnalisable
        fields = '__all__'

class Question_predefinieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question_predefinie
        fields = '__all__'
    