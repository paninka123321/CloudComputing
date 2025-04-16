# core/management/commands/import_nauczyciele.py
import csv
from django.core.management.base import BaseCommand
from core.models import Nauczyciel, Klasa

class Command(BaseCommand):
    help = 'Import nauczyciele from CSV'

    def handle(self, *args, **kwargs):
        with open('/Users/paulinakulczyk/Desktop/Magisterka/Cloud Computing/psychology-app/database/csvki/nauczyciele.csv', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile, delimiter=';')
            for row in reader:
                print(row) # for debugging
                # Get or create the Klasa instance
                klasa_obj, created = Klasa.objects.get_or_create(nazwa=row['klasa'])
                Nauczyciel.objects.create(
                    id_nauczyciela=row['id_nauczyciela'],
                    imie=row['imię'],
                    nazwisko=row['nazwisko'],
                    wyksztalcenie=row['wykształcenie'],
                    nauczany_przedmiot=row['nauczany_przedmiot'],
                    wiek=row['wiek'],
                    plec=row['plec'],
                    klasa=klasa_obj,
                    nazwa_szkoly=row['nazwa_szkoły']
                )
