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
        image = "gcr.io/${var.project_id}/my-django-app"  # Update with your container image name
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

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_storage_bucket" "frontend_bucket" {
  name                        = "${var.project_id}-frontend"
  location                    = var.region
  force_destroy               = true
  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }
}

resource "google_storage_bucket_iam_member" "frontend_public" {
  bucket = google_storage_bucket.frontend_bucket.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

resource "google_artifact_registry_repository" "docker_repo" {
  location      = var.region
  repository_id = "django-backend-repo"
  format        = "DOCKER"
}
