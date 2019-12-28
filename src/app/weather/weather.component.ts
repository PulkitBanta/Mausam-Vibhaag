import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherLocation: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.weatherLocation = this.formBuilder.group({
      location : ''
    })
  }

  getDataFromApi(formData) {
    console.log(formData)
  }

}
