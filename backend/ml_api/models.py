from django.db import models

class Nauczyciel(models.Model):
    id_nauczyciela = models.AutoField(primary_key=True)
    imie = models.CharField(max_length=100)
    nazwisko = models.CharField(max_length=100)
    wyksztalcenie = models.CharField(max_length=50)
    nauczany_przedmiot = models.CharField(max_length=100)
    wiek = models.IntegerField()
    plec = models.CharField(max_length=10)
    klasa = models.CharField(max_length=2)
    nazwa_szkoly = models.CharField(max_length=100)

class Rodzic(models.Model):
    id_rodzica = models.AutoField(primary_key=True)
    imie = models.CharField(max_length=100)
    nazwisko = models.CharField(max_length=100)
    wiek = models.IntegerField()
    zawod = models.CharField(max_length=100)
    tel_kontaktowy = models.CharField(max_length=15)
    email = models.CharField(max_length=100)

class Uczen(models.Model):
    id_ucznia = models.AutoField(primary_key=True)
    imie = models.CharField(max_length=100)
    nazwisko = models.CharField(max_length=100)
    klasa = models.CharField(max_length=2)
    wiek = models.IntegerField()
    id_rodzica = models.ForeignKey(Rodzic, on_delete=models.CASCADE)
    krotki_opis_nauczyciela = models.CharField(max_length=100)
    srednia_z_zachowania = models.DecimalField(max_digits=2, decimal_places=1)
    srednia_ocen = models.DecimalField(max_digits=2, decimal_places=1)

class WynikGry(models.Model):
    id_wyniku = models.AutoField(primary_key=True)
    id_gry = models.IntegerField()
    id_ucznia = models.ForeignKey(Uczen, on_delete=models.CASCADE)
    czas_wykonania = models.IntegerField()
    wynik_1 = models.DecimalField(max_digits=5, decimal_places=2)
    wynik_2 = models.DecimalField(max_digits=5, decimal_places=2)
    wynik_3 = models.DecimalField(max_digits=5, decimal_places=2)
    wynik_4 = models.DecimalField(max_digits=5, decimal_places=2)
    wynik_5 = models.DecimalField(max_digits=5, decimal_places=2)
    wynik_6 = models.DecimalField(max_digits=5, decimal_places=2)

class WynikKwestionariusza(models.Model):
    id_wynik_kwest = models.AutoField(primary_key=True)
    id_kwestionariusza = models.IntegerField()
    id_ucznia = models.ForeignKey(Uczen, on_delete=models.CASCADE)
    id_nauczyciela = models.ForeignKey(Nauczyciel, on_delete=models.CASCADE)
    odp_1 = models.IntegerField()
    odp_2 = models.IntegerField()
    odp_3 = models.IntegerField()
    odp_4 = models.IntegerField()
    odp_5 = models.IntegerField()
