import os
from decouple import config

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = config("SECRET_KEY", default="unsafe-default-secret")  # zmień w produkcji
DEBUG = config("DEBUG", default=False, cast=bool)
ALLOWED_HOSTS = ["*"]

INSTALLED_APPS = [
    'app',
    'rest_framework',
    'corsheaders',
    'django.contrib.contenttypes',
    'django.contrib.auth',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
]

ROOT_URLCONF = 'app.urls'
WSGI_APPLICATION = 'app.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config("POSTGRES_DB", default="postgres_db"),
        'USER': config("POSTGRES_USER", default="postgres"),
        'PASSWORD': config("POSTGRES_PASSWORD", default="postgres_password"),
        'HOST': config("POSTGRES_HOST", default="/cloudsql/psychological-app-a359c:europe-central2:psychological-db"),
        'PORT': config("POSTGRES_PORT", default="5432")
    }
}

CORS_ALLOWED_ORIGINS = [
    "http://psychological-app-a359c-frontend.storage.googleapis.com"
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
