import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  api_key = "Your API KEY"

  getWeather(location, country): Observable<any> {
    return this.http.get<any>("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"," + country + "&appid=" + this.api_key);
  }

  getHindiWeather(location, country): Observable<any> {
    return this.http.get<any>("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"," + country + "&appid=" + this.api_key + "&lang=hi");
  }

}