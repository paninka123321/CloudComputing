from django.db import models

class Nauczyciel(models.Model):
    id_nauczyciela = models.IntegerField(primary_key=True)
    imie = models.CharField(max_length=100)
    nazwisko = models.CharField(max_length=100)
    wyksztalcenie = models.CharField(max_length=50)
    nauczany_przedmiot = models.CharField(max_length=100)
    wiek = models.IntegerField()
    plec = models.CharField(max_length=10)
    klasa = models.CharField(max_length=2)
    nazwa_szkoly = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.imie} {self.nazwisko}"
    
class Rodzic(models.Model):
  id_rodzica = models.IntegerField(primary_key=True)
  imie = models.CharField(max_length=100)
  nazwisko = models.CharField(max_length=100)
  wiek = models.ImageField()
  zawod = models.CharField(max_length=100)
  tel_kontaktowy = models.CharField(max_length=9)
  email =  models.CharField(max_length=100)

  def __str__(self):
        return f"{self.imie} {self.nazwisko}"


