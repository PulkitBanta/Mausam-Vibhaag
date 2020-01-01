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
  hindiLocation: any ;
  hindiDesciption: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private hindiWeatherService: HindiWeatherService
  ) { }

  ngOnInit() {

    this.weatherLocation = this.formBuilder.group({
      location: ''
    })

    // inital location is set to delhi to get data from api
    this.apiService.getWeather("Delhi")
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData)
    })

    // converting data from english to hindi
    this.hindiWeatherService.toHindi('Delhi, India').
    subscribe(data => {
      this.hindiLocation = data;
      console.log(this.hindiLocation)
    })
    
    
  }

  getDataFromApi(formData) {
    this.apiService.getWeather(formData.location).subscribe(data => this.weatherData = data)
    console.log(this.weatherData)
    this.hindiWeatherService.toHindi(this.weatherData.request.query).subscribe(data => this.hindiLocation = data)
    console.log(this.hindiLocation)
    // this.hindiWeatherService.toHindi(this.weatherData.current.weather_descriptions[0]).subscribe(data => this.hindiDesciption = data)
    // console.log(this.hindiDesciption)
  }

  // allHindi(data) {
  //   this.hindiWeatherService.toHindi(data).subscribe(data => this.hindiLocation = data)
  //   console.log(this.hindiLocation)
  // }

}