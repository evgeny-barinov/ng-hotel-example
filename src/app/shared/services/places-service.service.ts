import { Injectable } from '@angular/core';
import { places } from '../mock/data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {

  private places: IRelaxDestination[];

  constructor() {
    this.places = places;
  }

  public getPlaces(): Observable<IRelaxDestination[]> {
    return of(this.places);
  }
}
