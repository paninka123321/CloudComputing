# 🌐 Terraform Configuration for NeuroDetective (GCP)

This folder contains all the Terraform configuration files required to deploy the **NeuroDetective** infrastructure on **Google Cloud Platform**.

The project includes deployment of:
- A Django backend served on **Cloud Run**
- A React frontend hosted on **Google Cloud Storage**
- Proper IAM access control for public frontend access
- GCS backend state management for Terraform

---

## 📁 File Overview

| File                 | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `main.tf`            | Main configuration. Creates Cloud Run (Django backend with Cloud SQL database), GCS bucket (frontend), and IAM settings for public access. |
| `variables.tf`       | Defines all required input variables (e.g., `project_id`, `region`, `django_secret`). |
| `terraform.tfvars`   | Stores variable values like `project_id`, `region`, service account path, etc. |
| `terraform-sa.json`  | GCP service account key used by Terraform for authentication. Keep this file secure. |
| `provider.tf`        | Sets up the Google provider and defines the remote backend in a GCS bucket. |
| `outputs.tf`         | (Optional) Outputs important deployment data like service URLs after apply. |
| `readme.txt`         | Simple documentation reference for team members (superseded by this file). |

---

## 🚀 Infrastructure Components

This configuration deploys:

- **Cloud Run (Django backend)**  
  A fully managed, auto-scaling compute platform for the Python backend. Container pulled from Artifact Registry.

- **Google Cloud Storage (GCS)**  
  Used for hosting the static frontend. A bucket is configured for public access and supports SPA routing.

- **IAM Roles**  
  Public access to the frontend bucket is granted with the `roles/storage.objectViewer` role.

> Additional components like **Cloud SQL** and **Artifact Registry** can be added for full backend support and CI/CD workflows.

---

## 🔧 Deployment Guide

1. **Install prerequisites**:
   - Terraform ≥ 1.5.0
   - Google Cloud SDK (`gcloud`)
   - Docker (for backend container build)

2. **Authenticate and configure GCP**:
   ```bash
   gcloud auth application-default login
   gcloud config set project <your-project-id>
