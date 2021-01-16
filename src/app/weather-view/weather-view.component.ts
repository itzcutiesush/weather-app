import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  weatherData$: Observable<any>;
  unit: Array<any> = [{temp:"°C", wind:"meter/sec"}, {temp:"°F", wind:"miles/hour"}];
  selectedUnit : Object = {};
  errorObject: any;

  ngOnInit(): void {
    this.selectedUnit = this.unit[0];
    this.getWeather("metric");
  }
  
  getWeather(units: string): void {
    const cityName = this.route.snapshot.paramMap.get('cityName');
    this.weatherData$ = this.appService.getWeatherForCity(cityName, units).pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      }));
  }

  handleUnitChange(unitName, pos): void{
    this.getWeather(unitName);
    this.selectedUnit = this.unit[pos];
  }
}
