import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { MainComponent } from './main/main.component';
import { WeatherHindiComponent } from './weather-hindi/weather-hindi.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'En', component: WeatherComponent},
  { path: 'Hindi', component: WeatherHindiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
