import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { HindiWeatherService } from '../hindi-weather.service';

@Component({
  selector: 'app-weather-hindi',
  templateUrl: './weather-hindi.component.html',
  styleUrls: ['./weather-hindi.component.css']
})
export class WeatherHindiComponent implements OnInit {

  public weatherLocation: FormGroup;
  weatherData;
  intial;
  hindiWeatherData;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private hindiWeatherService: HindiWeatherService
  ) { }

  ngOnInit() {
    this.weatherLocation = this.formBuilder.group({
      location: ''
    })

    // inital location is set to delhi
    this.apiService.getWeather("Delhi").subscribe(data => this.weatherData = data)
  }

  

  getDataFromApi(formData) {
    this.apiService.getWeather(formData.location).subscribe(data => this.weatherData = data)
    console.log(this.weatherData)
  }

}