variable "project_id" {
  description = "GCP project ID"
  type = string
}

variable "region" {
  description = "GCP region"
  type    = string
  default = "europe-west1"
}

variable "credentials_file" {
  description = "Path to the service account key JSON"
  type        = string
}


