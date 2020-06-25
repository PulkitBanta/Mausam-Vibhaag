import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  expression: boolean = false;
  expression1: boolean = false;

  stars = [
    {
      right: `${(Math.random() * 20) + 10}%`,
      top: `${(Math.random() * 20) + 10}%`
    },
    {
      right: `${(Math.random() * 35) + 25}%`,
      top: `${(Math.random() * 30) + 20}%`
    },
    {
      right: `${(Math.random() * 50) + 40}%`,
      top: `${(Math.random() * 40) + 30}%`
    },
    {
      right: `${(Math.random() * 65) + 55}%`,
      top: `${(Math.random() * 20) + 10}%`
    },
    {
      right: `${(Math.random() * 80) + 70}%`,
      top: `${(Math.random() * 30) + 20}%`
    },
    {
      right: `${(Math.random() * 95) + 85}%`,
      top: `${(Math.random() * 40) + 30}%`
    },
    {
      right: `${(Math.random() * 110) + 100}%`,
      top: `${(Math.random() * 40) + 5}%`
    }
  ]
  
  constructor() { }

  ngOnInit() { }
}