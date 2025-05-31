# Start from the official Python image
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create a working directory
WORKDIR /code

# Copy requirements.txt and install dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the whole project after dependencies are installed
COPY . /code/

# Set Cloud SQL connection details
ENV DB_SOCKET_PATH=/cloudsql
ENV INSTANCE_CONNECTION_NAME=psychological-app-a359c:europe-central2:psychological-db

# Expose port
EXPOSE 8080

# Run gunicorn with binding
CMD ["gunicorn", "app.wsgi:application", "--bind", "0.0.0.0:8080"]
