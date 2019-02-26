import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../store';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather: IWeather;

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.select('selectedPlace').subscribe((selectedPlace: IRelaxDestination) => {
      this.weather = selectedPlace.weather;
    });
  }

}
