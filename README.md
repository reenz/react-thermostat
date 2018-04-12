# Thermostat(WIP)

This is a simple thermostat app with below specifications.I am building this app to learn React.

## Specification

* [x] Thermostat starts at 20 degrees
* [x] You can increase the temperature with an up function
* [x] You can decrease the temperature with a down function
* [x] The minimum temperature is 10 degrees
* [x] Flash message when user tries to decrease temperature below 10
* [x] If power saving mode is on, the maximum temperature is 25 degrees
* [x] If power saving mode is off, the maximum temperature is 32 degrees
* [x] Power saving mode is on by default
* [x] You can reset the temperature to 20 with a reset function
* [x] You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* [ ] Low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.
* [x] Add a server
* [x] Deploy to Heroku
* [x] Infrastructure as code(Terraform) 

### How to use it

* git clone `git@github.com:reenz/react-thermostat.git`
* run `npm install` - to install all the dependencies
* run `npm start` - to start the app and visit localhost:3000
* run `npm test` - to run the tests

### Technologies

* React
* Jest
* Enzyme
* Babel
* Terraform

### Building Infrastructure using Terraform
* set environment variables `HEROKU_API_KEY` and `HEROKU_EMAIL`
* `terraforn init` to initialize
* and then `terraform apply` so that it scans the current directory for the configuration and applies the changes appropriately