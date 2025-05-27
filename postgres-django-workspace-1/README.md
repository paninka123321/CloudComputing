# README.md

# Postgres Django Workspace

This project is a Django application configured to work with a PostgreSQL database. It includes the necessary files and configurations to set up the application and the database.

## Project Structure

- **backend/manage.py**: The entry point for the Django application, setting up the environment and running management commands.
- **backend/backend/**: Contains the main application code, including settings, URLs, and WSGI configuration.
- **backend/app/**: Contains the application logic, including views and models.
- **docker/**: Contains Docker configuration files for building and running the application in containers.
- **sql/**: Contains SQL scripts for setting up the database schema.
- **README.md**: Documentation file for the project.

## Setup Instructions

To configure the project to run the database based on `create_tables.sql`, follow these steps:

1. Update the `DATABASES` section in `backend/backend/settings.py` to use environment variables:

```python
import os

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_DB', 'your_database_name'),
        'USER': os.environ.get('POSTGRES_USER', 'your_database_user'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD', 'your_database_password'),
        'HOST': 'db',
        'PORT': '5432',
    }
}
```

2. Ensure that the environment variables are correctly set in `docker/docker-compose.yml`:

```yaml
environment:
  POSTGRES_DB: your_database_name
  POSTGRES_USER: your_username
  POSTGRES_PASSWORD: your_password
```

3. Verify that the `sql/create_tables.sql` file is correctly mounted in the database container, which is already defined in `docker-compose.yml`:

```yaml
volumes:
  - ./sql:/docker-entrypoint-initdb.d
```

4. Ensure that the models corresponding to the tables in `create_tables.sql` are defined in `backend/app/models.py` so that Django can manage the data in these tables.

After making these changes, run the command `docker-compose up` in the project's root directory to start the containers and create the database based on the `create_tables.sql` file.