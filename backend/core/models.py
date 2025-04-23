from django.db import models

class Klasa(models.Model):
    nazwa = models.CharField(max_length=2, unique=True)  # e.g. "1A", "2B"
    
    def __str__(self):
        return self.nazwa
    
class Nauczyciel(models.Model):
    id_nauczyciela = models.IntegerField(primary_key=True)
    imie = models.CharField(max_length=100)
    nazwisko = models.CharField(max_length=100)
    wyksztalcenie = models.CharField(max_length=50)
    nauczany_przedmiot = models.CharField(max_length=100)
    wiek = models.IntegerField()
    plec = models.CharField(max_length=10)
    klasa = models.ForeignKey(Klasa, on_delete=models.SET_NULL, null=True)
    nazwa_szkoly = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.imie} {self.nazwisko}"
    
class Rodzic(models.Model):
  id_rodzica = models.IntegerField(primary_key=True)
  imie = models.CharField(max_length=100)
  nazwisko = models.CharField(max_length=100)
  wiek = models.IntegerField()
  zawod = models.CharField(max_length=100)
  tel_kontaktowy = models.CharField(max_length=9)
  email =  models.CharField(max_length=100)

  def __str__(self):
        return f"{self.imie} {self.nazwisko}"
  
class Uczen(models.Model):
  id_ucznia = models.IntegerField(primary_key=True)
  imie = models.CharField(max_length= 100) 
  nazwisko =  models.CharField(max_length= 100) 
  klasa = models.ForeignKey(Klasa, on_delete=models.SET_NULL, null=True)
  wiek = models.IntegerField()
  id_rodzica = models.ForeignKey(Rodzic, on_delete=models.CASCADE)
  opis_ucznia = models.CharField(max_length= 100) 
  srednia_z_zachowania = models.DecimalField(max_digits=2, decimal_places=1)
  srednia_ocen = models.DecimalField(max_digits=2, decimal_places=1)

def __str__(self):
        return f"{self.imie} {self.nazwisko}"


class WynikiKwestionariuszy(models.Model):
  id_wynik_kwest = models.IntegerField(primary_key=True)
  id_kwestionariusza = models.IntegerField()
  id_ucznia = models.ForeignKey(Uczen, on_delete=models.CASCADE)
  id_nauczyciela = models.ForeignKey(Nauczyciel, on_delete=models.SET_NULL, null=True)
  odp_1 = models.IntegerField()
  odp_2 = models.IntegerField()
  odp_3 = models.IntegerField()
  odp_4 = models.IntegerField()
  odp_5 = models.IntegerField()

def __str__(self):
        return f"{self.odp_1} {self.odp_2} {self.odp_3} {self.odp_4} {self.odp_5}"
