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
    this.hindiWeatherService.toHindi('Delhi').subscribe(data => this.hindiWeatherData = data)
    console.log(this.hindiWeatherData)
    console.log(this.weatherData)

    //checking hindi api
    // this.hindiWeatherData = this.hindiWeatherService.toHindi('Delhi')
    // console.log(this.hindiWeatherData)
  }

  getDataFromApi(formData) {
    this.apiService.getWeather(formData.location).subscribe(data => this.weatherData = data)
    this.hindiWeatherService.toHindi('Delhi').subscribe(data => this.hindiWeatherData = data)
    console.log(this.weatherData)
    console.log(this.hindiWeatherData)
  }

  allHindi() {

  }

}