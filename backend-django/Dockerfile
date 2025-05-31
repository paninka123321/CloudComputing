# Start from the official Python image
FROM python:3.10

# Create a working directory
WORKDIR /code

# Copy requirements.txt and install dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the whole project after dependencies are installed
COPY . /code/

# Expose port
ENV PORT 8080
# gcloud builds submit --tag europe-central2-docker.pkg.dev/psychological-app-a359c/psycho-docker/quickstart
# Run gunicorn with binding
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8080"]