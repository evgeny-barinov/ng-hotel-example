import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PlacesServiceService } from '../shared/services/places-service.service';
import {IStore} from '../store';
import {Store} from '@ngrx/store';
import {GetPlacesPending, SelectPlace} from '../store/actions/places.action';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public places: IRelaxDestination[];

  public currentType = '';

  public selectedPlace: IRelaxDestination;

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.dispatch(new GetPlacesPending());
    this.store.select('places').subscribe((places: IRelaxDestination[]) => {
        this.places = places;
    });
    this.store.dispatch(new SelectPlace(this.places[0]));
    this.store.select('selectedPlace').subscribe((selectedPlace: IRelaxDestination) => {
      this.selectedPlace = selectedPlace;
    });
  }

  public selectPlace(place: IRelaxDestination) {
    console.log(place);
    this.store.dispatch(new SelectPlace(place));
    this.store.select('selectedPlace').subscribe((selectedPlace: IRelaxDestination) => {
       this.selectedPlace = selectedPlace;
    });
  }

}
