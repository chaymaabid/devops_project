terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"  # Ou une version stable récente
    }
  }
}

provider "docker" {}


resource "docker_image" "backend_image" {
  name         = "node:18"
  keep_locally = true
}

resource "docker_container" "backend_container" {
  name  = "backend"
  image = docker_image.backend_image.name
  ports {
    internal = 5000
    external = 5000
  }

  volumes {
    host_path = abspath("${path.module}/backend")
    container_path = "/app"
  }

  env = [
    "MONGO_URI=${var.mongo_uri}",
    "PORT=5000"
  ]

  working_dir = "/app"
  command     = ["sh", "-c", "npm install && node server.js"]
}
