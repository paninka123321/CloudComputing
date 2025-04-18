# Generated by Django 5.2 on 2025-04-15 23:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Klasa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nazwa', models.CharField(max_length=2, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Rodzic',
            fields=[
                ('id_rodzica', models.IntegerField(primary_key=True, serialize=False)),
                ('imie', models.CharField(max_length=100)),
                ('nazwisko', models.CharField(max_length=100)),
                ('wiek', models.IntegerField()),
                ('zawod', models.CharField(max_length=100)),
                ('tel_kontaktowy', models.CharField(max_length=9)),
                ('email', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Nauczyciel',
            fields=[
                ('id_nauczyciela', models.IntegerField(primary_key=True, serialize=False)),
                ('imie', models.CharField(max_length=100)),
                ('nazwisko', models.CharField(max_length=100)),
                ('wyksztalcenie', models.CharField(max_length=50)),
                ('nauczany_przedmiot', models.CharField(max_length=100)),
                ('wiek', models.IntegerField()),
                ('plec', models.CharField(max_length=10)),
                ('nazwa_szkoly', models.CharField(max_length=100)),
                ('klasa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.klasa')),
            ],
        ),
        migrations.CreateModel(
            name='Uczen',
            fields=[
                ('id_ucznia', models.IntegerField(primary_key=True, serialize=False)),
                ('imie', models.CharField(max_length=100)),
                ('nazwisko', models.CharField(max_length=100)),
                ('wiek', models.IntegerField()),
                ('opis_ucznia', models.CharField(max_length=100)),
                ('srednia_z_zachowania', models.DecimalField(decimal_places=1, max_digits=2)),
                ('srednia_ocen', models.DecimalField(decimal_places=1, max_digits=2)),
                ('id_rodzica', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.rodzic')),
                ('klasa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.klasa')),
            ],
        ),
        migrations.CreateModel(
            name='WynikiKwestionariuszy',
            fields=[
                ('id_wynik_kwest', models.IntegerField(primary_key=True, serialize=False)),
                ('id_kwestionariusza', models.IntegerField()),
                ('odp_1', models.IntegerField()),
                ('odp_2', models.IntegerField()),
                ('odp_3', models.IntegerField()),
                ('odp_4', models.IntegerField()),
                ('odp_5', models.IntegerField()),
                ('id_nauczyciela', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.nauczyciel')),
                ('id_ucznia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.uczen')),
            ],
        ),
    ]
