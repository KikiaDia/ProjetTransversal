#test api
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import *
from django.test import TestCase

class Test_api_user(APITestCase):
    def test_create_account(self):
        url = reverse('user')
        data = {'username': 'Kiki','last_name':'Dia','first_name':'Kikia','password': 'strong_password','domaine':'work'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username,'Kiki')

class Test_api_Admin(APITestCase):
    def test_create_account(self):
        url = reverse('admin')
        data = {'username': 'Kiki','last_name':'Dia','first_name':'Kikia','password': 'strong_password','domaine':'work'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Admin.objects.count(), 1)
        self.assertEqual(Admin.objects.get().username,'Kiki')

# class Test_api_sondage(APITestCase):
#     def test_create_sondage(self):
#         url = reverse('sondages')
#         data = {'titre_sondage':'Faki','url_sondage':'http://testserver/sondages','objects':'obj'}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(sondage.objects.count(), 1)
#         self.assertEqual(sondage.objects.get(),'titre_sondage')

class Test_api_question(APITestCase):
    def test_create_question(self):
        url = reverse('question')
        data = {'intitule_question':'Quoi','obligatoire':'True','nom_type': 'zone_de_texte'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Question.objects.count(), 1)
        self.assertEqual(Question.objects.get().intitule_question,'Quoi')


class Test_api_Option_reponse(APITestCase):
    def test_create_Option_reponse(self):
        url = reverse('option_reponse')
        data = {'intitule_option':'Oui'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Option_reponse.objects.count(), 1)
        self.assertEqual(Option_reponse.objects.get().intitule_option,'Oui')

# class Test_api_Reponse(APITestCase):
#     def test_create_Reponse(self):
#         url = reverse('reponse')
#         data = {'intitule_reponse':'titre'}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(Reponse.objects.count(), 1)
#         self.assertEqual(Reponse.objects.get().intitule_reponse,'titre')


# class Test_api_Parametre(APITestCase):s
#     def test_create_Parametre(self):
#         url = reverse('parametre')
#         data = {'contrainte_type_donnees':'contrainte'}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(Parametre.objects.count(), 1)
#         self.assertEqual(Parametre.objects.get().contrainte_type_donnees,'contrainte')

class Test_api_Page(APITestCase):
    def test_create_Page(self):
        url = reverse('page')
        data = {'numero_page':10}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Page.objects.count(), 1)
        self.assertEqual(Page.objects.get().numero_page,10)

class Test_api_Repondant(APITestCase):
    def test_create_Repondant(self):
        url = reverse('repondant')
        data = {'id_repondant':'gvjhbjh'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Repondant.objects.count(), 1)
        self.assertEqual(Repondant.objects.get().id_repondant,'gvjhbjh')


class Test_api_Theme(APITestCase):
    def test_create_Theme(self):
        url = reverse('theme')
        data = {'nom_theme':'vaccination'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Theme.objects.count(), 1)
        self.assertEqual(Theme.objects.get().nom_theme,'vaccination')




# class Test_api_Reponse_enquete(APITestCase):
#     def test_create_Reponse_enquete(self):
#         url = reverse('reponse_enquete')
#         data = {'heure_debut':'20:30','heure_fin':'22:22','date':'2006-10-25'}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertEqual(Reponse_enquete.objects.count(), 1)
#         self.assertEqual(Reponse_enquete.objects.get().heure_debut,'20:30')



#test model
class TestModelUser(TestCase):
    def test_should_create_user(self):
        user=User.objects.create(username='Kiki',last_name='Dia',first_name='Kikia',password='strong_password',domaine='work')
        user.save()
        self.assertEqual(str(user),'Kikia Dia')

class TestModelAdmin(TestCase):
    def test_should_create_admin(self):
        admin=User.objects.create(username='Kiki',last_name='Dia',first_name='Kikia',password='strong_password',domaine='work')
        admin.save()
        self.assertEqual(str(admin),'Kikia Dia')


class TestModelReponse(TestCase):
    def test_should_create_Reponse(self):
        reponse=Reponse.objects.create(intitule_reponse='formulation')
        reponse.save()
        self.assertEqual(str(reponse),'formulation')

class TestModelTheme(TestCase):
    def test_should_create_theme(self):
        theme=Theme.objects.create(nom_theme='vaccination')
        theme.save()
        self.assertEqual(str(theme),'vaccination')

#class TestModelReponse_enquete(TestCase):
#     def test_should_create_admin(self):
#         enquete=User.objects.create(heure_debut='20:30',heure_fin='22:22',date='2006-10-25')
#         enquete.save()
#         self.assertEqual(str(enquete),'2006-10-25')



