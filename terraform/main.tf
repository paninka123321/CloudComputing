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

resource "google_cloud_run_service" "psychobackend" {
  name     = "psychobackend"
  location = "europe-central2"

  template {
    spec {
      containers {
        image = "europe-central2-docker.pkg.dev/psychological-app-a359c/psycho-docker/quickstart"

        env {
          name  = "CLOUDRUN_SERVICE_URL"
          value = "https://psychobackend-312700987588.europe-central2.run.app"
        }

        env {
          name  = "DB_HOST"
          value = "/cloudsql/psychological-app-a359c:europe-central2:psychological-db"
        }

        ports {
          container_port = 8080
        }
      }
    }

    metadata {
      annotations = {
        "run.googleapis.com/cloudsql-instances" = "psychological-app-a359c:europe-central2:psychological-db"
      }
    }
  }

  traffics {
    percent         = 100
    latest_revision = true
  }

  autogenerate_revision_name = true
}


resource "google_storage_bucket" "frontend_bucket" {
  name                        = "${var.project_id}-frontend"
  location                    = var.region
  force_destroy               = true
  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "in