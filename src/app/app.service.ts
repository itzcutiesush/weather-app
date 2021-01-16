import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }
  private countryAllUrl = "https://restcountries.eu/rest/v2/all";
  private searchCountryUrl = "https://restcountries.eu/rest/v2/name/";

  getCountryList(searchTerm: string): Observable<[]> {
    let term = searchTerm ? searchTerm.trim(): "";
    if(term == "")
      return this.http.get<[]>(this.countryAllUrl);
    else
      return this.http.get<[]>(this.searchCountryUrl + term);
  }
  
  getWeatherForCity(cityName: string, units: string): Observable<any> {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=22eb706ac31e85b60bd045c26c499cdc`;
    return this.http.get<any>(weatherUrl);
  }
}
