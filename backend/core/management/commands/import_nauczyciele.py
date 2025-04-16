# core/management/commands/import_nauczyciele.py
import csv
from django.core.management.base import BaseCommand
from core.models import Nauczyciel 

class Command(BaseCommand):
    help = 'Import nauczyciele from CSV'

    def handle(self, *args, **kwargs):
        with open('/Users/paulinakulczyk/Desktop/Magisterka/Cloud Computing/psychology-app/database/csvki/nauczyciele.csv', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                Nauczyciel.objects.create(
                    id_nauczyciela=row['id_nauczyciela'],
                    imie=row['imie'],
                    nazwisko=row['nazwisko'],
                    wyksztalcenie=row['wyksztalcenie'],
                    nauczany_przedmiot=row['nauczany_przedmiot'],
                    wiek=row['wiek'],
                    plec=row['plec'],
                    klasa=row['klasa'],
                    nazwa_szkoly=row['nazwa_szkoly']
                )
