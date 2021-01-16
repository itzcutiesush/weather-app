# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## About App

The app has two pages. On running the app, it lands on the first page which shows list of countries. This page has an option to search country by name. 

On clicking any country, the second page is loaded. This page shows 5 information - City Name, Temperature, Wind, Humidity & Cloud. User has option to select from two types of units - Metric or Imperial. The icon for temperature is based on data & is loaded via https://openweathermap.org/. Rest of the icons are selected from https://www.iconfinder.com/. On hover on icon or data, shows what information it is.

Precipitation information could not be found in many data set, hence it is not shown.

The app is mobile/tablet compatible. I was not sure about how exactly it should look in smaller devices, but I have made sure the app doesn't break in any device.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
