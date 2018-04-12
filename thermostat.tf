provider "heroku" {}

# Create a new application
resource "heroku_app" "default" {
  name   = "reenz-thermostat"
  region = "us"

  config_vars {
    git_url = "https://github.com/reenz/react-thermostat"
  }

  buildpacks = [
    "heroku/nodejs",
  ]
}
