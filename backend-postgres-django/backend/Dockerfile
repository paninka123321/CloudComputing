FROM python:3.9-slim

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie plików zależności
COPY requirements.txt ./

# Instalacja zależności
RUN pip install --no-cache-dir -r requirements.txt

# Kopiowanie całego projektu
COPY . .

# Zmienne środowiskowe
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT=8080

# Zbieranie statycznych plików i migracje bazy przy starcie kontenera
CMD python manage.py collectstatic --noinput && \
    python manage.py migrate --noinput && \
    gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT