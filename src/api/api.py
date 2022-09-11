from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework import generics
from .serializers import *
from .models import *
from rest_framework import status


#Ceux sont les restrictions que j'ai mises en commentaire
#@authentication_classes([SessionAuthentication, TokenAuthentication])
#@permission_classes([IsAuthenticated])
@api_view(["GET","POST","PUT"])

def api_user(request):
    if request.method == "GET":
        queryset = User.objects.all()
        ser = UserSerializer(queryset, many =True)
        return Response(ser.data)
    elif request.method == 'POST':
        data =request.data
        ser=UserSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","POST","PUT"])

def api_sondage(request):
    if request.method == "GET":
        queryset = sondage.objects.all()
        ser = SondageSerializer(queryset, many =True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = SondageSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)


# #Kikia

#@api_view(["GET","POST","PUT"])

# def api_typequestions(request):
  #  if request.method == "GET":
   #     queryset= Type_question.objects.all()
    #    ser=Type_questionSerializer(queryset,many=True)
     #   return Response(ser.data)
   # if request.method == "POST":
    #    data=request.data
     #   ser=Type_questionSerializer(data=data)
      #  if ser.is_valid():
       #     ser.save()
        #    return Response(ser.data)


@api_view(["GET","POST","PUT"])
def api_optionreponse(request):
    if request.method == "GET":
        queryset= Option_reponse.objects.all()
        ser=Option_reponseSerializer(queryset,many=True)
        return Response(ser.data)
    if request.method == "POST":
        data=request.data
        ser=Option_reponseSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","POST","PUT"])
def api_parametre(request):
    if request.method == "GET":
        queryset= Parametre.objects.all()
        ser=ParametreSerializer(queryset,many=True)
        return Response(ser.data)
    if request.method == "POST":
        data=request.data
        ser=ParametreSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)


# #Fama

@api_view(['GET', "POST", "PUT"]) 
def api_question(request):
    if request.method == 'GET':
        queryset = Question.objects.all()
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method=="POST":
        data=request.data
        fm=QuestionSerializer(data=data)
        if fm.is_valid():
            fm.save()
            return Response(fm.data, status=status.HTTP_201_CREATED)
        return Response(fm.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', "POST", "PUT"]) 
def api_page(request):
    if request.method == 'GET':
        queryset = Page.objects.all()
        serializer = PageSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method=="POST":
        data=request.data
        fm=PageSerializer(data=data)
        if fm.is_valid():
            fm.save()
            return Response(fm.data, status=status.HTTP_201_CREATED)
        return Response(fm.errors, status=status.HTTP_400_BAD_REQUEST)

        
@api_view(['GET', "POST", "PUT"]) 
def api_reponseenquête(request):
    if request.method == 'GET':
        queryset = Reponse_enquete.objects.all()
        serializer = Reponse_enqueteSerializer(queryset, many=True)
        return Response(serializer.data)
    if request.method=="POST":
        data=request.data
        fm=Reponse_enqueteSerializer(data=data)
        if fm.is_valid():
            fm.save()
            return Response(fm.data, status=status.HTTP_201_CREATED)
        return Response(fm.errors, status=status.HTTP_400_BAD_REQUEST)



# #Fatou Mboup
@api_view(['GET','POST','PUT'])
#@authentication_classes([SessionAuthentication])
#@permission_classes([IsAuthenticated])
def api_admin(request):
    if request.method=="GET":
        queryset = Admin.objects.all()
        ser = AdminSerializer(queryset, many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = AdminSerializer(data = data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT'])
def api_repondant(request):
    if request.method=="GET":
        queryset = Repondant.objects.all()
        ser = RepondantSerializer(queryset, many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = RepondantSerializer(data = data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST','PUT'])
def api_reponse(request):
    if request.method=="GET":
        queryset = Reponse.objects.all()
        ser = ReponseSerializer(queryset, many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = ReponseSerializer(data = data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST','PUT'])
def api_theme(request):
    if request.method=="GET":
        queryset = Theme.objects.all()
        ser = ThemeSerializer(queryset, many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = ThemeSerializer(data = data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST','PUT'])
def api_modele_personnalisable(request):
    if request.method=="GET":
        queryset = Modele_personnalisable.objects.all()
        ser = Modele_personnalisableSerializer(queryset, many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = Modele_personnalisableSerializer(data = data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST','PUT'])
def api_question_predefinie(request):
    if request.method=="GET":
        queryset = Question_predefinie.objects.all()
        ser = Question_predefinieSerializer(queryset, many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        data = request.data
        ser = Question_predefinieSerializer(data = data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)



        







