import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryViewComponent } from './country-view/country-view.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';

const routes: Routes = [
  { path: 'country', component: CountryViewComponent },
  { path: 'weather/:cityName', component: WeatherViewComponent },
  { path: '**', redirectTo: '/country'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
