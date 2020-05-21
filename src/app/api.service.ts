import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  api_key = "Your API KEY"

  getWeather(location, country) {
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"," + country + "&appid=" + this.api_key);
  }

  getHindiWeather(location, country) {
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"," + country + "&appid=" + this.api_key + "&lang=hi");
  }

}