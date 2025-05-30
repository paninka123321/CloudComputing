FROM python:3.9-slim

# Ustaw katalog roboczy na /app
WORKDIR /app

# Skopiuj plik requirements.txt i zainstaluj zależności
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Utwórz katalog na socket Cloud SQL (jeśli korzystasz z Cloud SQL Proxy)
RUN mkdir /cloudsql

# Skopiuj całą zawartość katalogu backend/ do /app w obrazie
COPY . .

# Zmienne środowiskowe
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT=8080

# Komenda startowa: collectstatic, migrate, uruchomienie gunicorn
CMD python manage.py collectstatic --noinput && \
    python manage.py migrate --noinput && \
    gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT --workers 1