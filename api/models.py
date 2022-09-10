from djongo import models

#Create your models here.

class User(models.Model):
    username = models.CharField(max_length = 100, default='')
    last_name = models.CharField(max_length = 100)
    first_name = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    domaine = models.CharField(max_length = 100)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"

class sondage(models.Model):
    fk_user = models.ForeignKey('User',on_delete = models.CASCADE)
    titre_sondage = models.CharField(max_length = 100)
    logo = models.ImageField()
    url_sondage = models.URLField(max_length=200)
    objects = models.DjongoManager()

    def __str__(self) -> str:
        return f"{self.titre_sondage}"

#Kikia
class Question(models.Model):
    fk_page = models.ForeignKey('Page',on_delete = models.CASCADE, default='')
    intitule_question = models.CharField(max_length=300)
    obligatoire = models.BooleanField()
    nom_type = models.CharField(max_length=100, default="")

    def __str__(self) -> str:
        return f"{self.intitule_question}"

#class Type_question(models.Model):
    #nom_type=models.CharField(max_length=100)

    #def __str__(self) -> str:
        #return f"{self.nom_type}"

class Option_reponse(models.Model):
    fk_question = models.ForeignKey('Question',on_delete = models.CASCADE, default="")
    intitule_option=models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"{self.intitule_option}"

class Parametre(models.Model):
    contrainte_type_donnees=models.CharField(max_length=100)
    fk_question=models.ManyToManyField('Question')
    
    def __str__(self) -> str:
        return f"{self.contrainte_type_donnees}"


# #Fama


class Page(models.Model):
    fk_sondage1 = models.ForeignKey('sondage',on_delete = models.CASCADE, default='')
    numero_page = models.IntegerField()

    def __str__(self) -> str:
        return f"{self.numero_page}"

class Repondant(models.Model):
    id_repondant = models.CharField(max_length = 200)

class Reponse_enquete(models.Model):
    heure_debut = models.TimeField(max_length=300)
    heure_fin = models.TimeField(max_length=300)
    date = models.DateField(max_length=300)
    fk_sondage=models.ForeignKey('Sondage',on_delete=models.CASCADE)
    fk_repondant=models.ForeignKey('Repondant',on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f"{self.date}"

# #Fatou Mboup
class Admin(User):
   pass

class Reponse(models.Model):
    intitule_reponse = models.CharField(max_length = 200)
    c = models.ForeignKey('Question',on_delete = models.CASCADE)

    def __str__(self) -> str:
        return f"{self.intitule_reponse}"

class Theme(models.Model):
    nom_theme = models.CharField(max_length= 200)

    def __str__(self) -> str:
        return f"{self.nom_theme}"

class Modele_personnalisable(sondage):
    fk_theme = models.ForeignKey('Theme',on_delete = models.CASCADE)

class Question_predefinie(Question):
    fk_theme1 = models.ForeignKey('Theme',on_delete = models.CASCADE)
    fk_modele_personnalisable = models.ManyToManyField('Modele_personnalisable')



    


