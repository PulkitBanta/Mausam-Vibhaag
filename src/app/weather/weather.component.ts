import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherLocation: FormGroup;
  weatherData;
  intial;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.weatherLocation = this.formBuilder.group({
      location: '',
      country: ''
    })

    // inital location is set to delhi
    this.apiService.getWeather("Delhi", "IN").subscribe(data => this.weatherData = data)
  }

  
  reduce(number) {
    return number.toFixed(1);
  }

  getDataFromApi(formData) {
    this.apiService.getWeather(formData.location, formData.country).subscribe(data => this.weatherData = data)
    console.log(this.weatherData)
  }

}