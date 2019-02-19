import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hot Weather Widget';

  public selectedPlace: IRelaxDestination | boolean = false;

  public onPlaceSelected(place: IRelaxDestination) {
    this.selectedPlace = place;
  }
}
