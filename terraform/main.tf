terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"  # You can pin more precisely if needed
    }
  }

  backend "gcs" {
    bucket = "tf-state-psychological-bucket"   # Replace with your actual bucket name
    prefix = "terraform/state"             # Optional path inside the bucket
  }
}

provider "google" {
  credentials = file(var.credentials_file)  # Usually points to a .json key file or uses ADC
  project     = var.project_id
  region      = var.region
}

resource "google_cloud_run_service" "django-app" {
  name     = "django-backend"
  location = var.region

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/my-django-app"  # ✅ Update with your container image name
        ports {
          container_port = 8000
        }
        env {
          name  = "DJANGO_SECRET_KEY"
          value = var.django_secret  # safer to use var than hardcoding
        }
      }
    }
  }

  traffics {
    percent         = 100
    latest_revision = true
  }
}




