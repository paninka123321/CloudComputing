
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

def load_prepare_data():
    students = pd.read_csv('../../database/csvki/uczniowie.csv', sep=',', quotechar='"', doublequote=True)
    games_results = pd.read_csv('../../database/csvki/wyniki_gier.csv', sep=';', encoding='utf-8')
    surveys_results = pd.read_csv('../../database/csvki/wyniki_kwestionariuszy.csv', sep=';', encoding='utf-8')

    games_results['Srednia_Wynikow'] = games_results[['Wynik_1','Wynik_2','Wynik_3','Wynik_4','Wynik_5','Wynik_6']].mean(axis=1)
    test = games_results.groupby('ID_Ucznia')[['Czas_Wykonania', 'Srednia_Wynikow']].mean().reset_index()

    test['ID_Ucznia'] = test['ID_Ucznia'].astype(str)
    students['ID_Ucznia'] = students['ID_Ucznia'].astype(str)

    model_data = pd.merge(test, students, on='ID_Ucznia')
    model_data = model_data[['ID_Ucznia', 'Czas_Wykonania', 'Srednia_Wynikow', 'Średnia_z_zachowania', 'Podejrzenie_ADHD']]

    X = model_data[['Czas_Wykonania', 'Srednia_Wynikow', 'Średnia_z_zachowania']].values
    y = model_data['Podejrzenie_ADHD'].map({'brak': 0, 'podejrzenie': 1, 'stwierdzone': 1})

    for i in range(3):
        scl = StandardScaler()
        X[:,i] = scl.fit_transform(X[:,i].reshape(-1, 1)).ravel()

    return X, y
