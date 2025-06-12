# === Cloud Run ===
resource "google_cloud_run_service" "django_app" {
  name     = "psychobackend"
  location = var.region

  template {
    spec {
      containers {
        image = "europe-central2-docker.pkg.dev/${var.project_id}/psycho-docker/latest"
        ports {
          container_port = 8000
        }
        env {
          name  = "DJANGO_SECRET_KEY"
          value = var.django_secret
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_member" "allow_all" {
  service  = google_cloud_run_service.django_app.name
  location = var.region
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# === Frontend (static GCS hosting) ===
resource "google_storage_bucket" "frontend" {
  name     = "psychological-app-a359c-frontend"
  location = "europe-west1"
  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }
  uniform_bucket_level_access = true
  force_destroy = true
}

resource "google_storage_bucket_iam_member" "frontend_public" {
  bucket = google_storage_bucket.frontend.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# === Artifact Registry (Docker) ===
resource "google_artifact_registry_repository" "docker_repo" {
  location      = var.region
  repository_id = "psycho-docker"
  format        = "DOCKER"
  description   = "Repozytorium obrazów Dockera"
}

# === Cloud SQL ===
resource "google_sql_database_instance" "postgres_instance" {
  name             = "psychological-db"
  database_version = "POSTGRES_17"
  region           = var.region

  settings {
    tier = "db-f1-micro"
    ip_configuration {
      ipv4_enabled    = true
      authorized_networks {
        name  = "public"
        value = "0.0.0.0/0"
      }
    }
  }
}

resource "google_sql_database" "app_db" {
  name     = "appdb"
  instance = google_sql_database_instance.postgres_instance.name
}

resource "google_sql_user" "default" {
  name     = var.db_user
  instance = google_sql_database_instance.postgres_instance.name
  password = var.db_password
}

# === Firebase Auth (email login only) ===
resource "google_identity_platform_project_default_config" "firebase_auth" {
  project = var.project_id

  sign_in {
    email {
      enabled = true
    }
  }
}