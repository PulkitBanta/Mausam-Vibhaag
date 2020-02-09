import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(location, country) {
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"," + country + "&appid=337d351936e39e0032a988f267614961");
  }

  getHindiWeather(location, country) {
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"," + country + "&appid=337d351936e39e0032a988f267614961&lang=hi");
  }

}