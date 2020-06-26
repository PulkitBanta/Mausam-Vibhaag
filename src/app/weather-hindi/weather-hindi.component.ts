import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-hindi',
  templateUrl: './weather-hindi.component.html',
  styleUrls: ['./weather-hindi.component.css']
})
export class WeatherHindiComponent implements OnInit {

  public weatherLocation: FormGroup;
  weatherData$: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.weatherLocation = this.formBuilder.group({
      location: '',
      country: ''
    })

    // inital location is set to delhi to get data from api
    this.apiService.getHindiWeather("Delhi", "IN").subscribe(data => this.weatherData$ = data)
  }
  
  getDataFromApi(formData): void {
    this.apiService.getHindiWeather(formData.location, formData.country).subscribe(data => this.weatherData$ = data)
  }

  reduce(number): void {
    return number.toFixed(1);
  }

  goBack(): void {
    this.location.back();
  }
}