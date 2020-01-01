import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get("http://api.weatherstack.com/current?access_key=fbcd8f910f691644f025d8065bb6a5ab&query=" + location)
  }

}