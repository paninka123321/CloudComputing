terraform {
  backend "gcs" {
    bucket = "tf-state-psychological-bucket"
    prefix = "terraform/state"
  }
}