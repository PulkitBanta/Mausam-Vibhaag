import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HindiWeatherService {

  constructor(private http: HttpClient) { }

  getHindiWeather() {
    return this.http.get('../assets/hindi.json');
  }
}
