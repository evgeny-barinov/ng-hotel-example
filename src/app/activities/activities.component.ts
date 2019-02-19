import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { places} from '../shared/mock/data';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public places: IRelaxDestination[];

  public currentType = '';

  @Output()
  public placeSelected = new EventEmitter();

  public selectedPlace: IRelaxDestination;

  constructor() { }

  ngOnInit() {
    this.places = places;
    this.selectPlace(this.places[0]);
  }

  public selectPlace(place: IRelaxDestination) {
    this.selectedPlace = place;
    this.placeSelected.emit(place);
  }

}
