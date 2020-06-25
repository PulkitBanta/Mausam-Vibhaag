import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

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

    // inital location is set to delhi
    this.apiService.getWeather("Delhi", "IN").subscribe(data => this.weatherData$ = data)

    // changing the content of back button
    if(window.outerWidth < 500) {
      document.querySelector('.back').textContent = '<--'
      document.querySelector('.back').classList.remove("btn-dark")
    }
  }

  reduce(number) {
    return number.toFixed(1);
  }

  getDataFromApi(formData) {
    this.apiService.getWeather(formData.location, formData.country).subscribe(data => this.weatherData$ = data)
    console.log(this.weatherData$)
  }

  goBack(): void {
    this.location.back();
  }

}