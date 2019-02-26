import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PlacesServiceService } from '../shared/services/places-service.service';
import {IStore} from '../store';
import {Store} from '@ngrx/store';
import {GetPlacesPending} from '../store/actions/places.action';

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

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.dispatch(new GetPlacesPending());
    this.store.select('places').subscribe((places: IRelaxDestination[]) => {
        this.places = places;
    });
    this.selectPlace(this.places[0]);
  }

  public selectPlace(place: IRelaxDestination) {
    this.selectedPlace = place;
    this.placeSelected.emit(place);
  }

}
