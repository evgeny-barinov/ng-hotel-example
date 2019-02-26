import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {GET_PLACES_PENDING, GetPlacesError, GetPlacesPending, GetPlacesSuccess} from '../actions/places.action';
import {PlacesServiceService} from '../../shared/services/places-service.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PlacesEffects {

    @Effect()
    places$ = this.actions$.pipe(
        ofType(GET_PLACES_PENDING),
        switchMap(() => this.placesService.getPlaces().pipe(
                map((places: IRelaxDestination[]) => new GetPlacesSuccess(places)),
                catchError((err) => of(new GetPlacesError(err)))
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private placesService: PlacesServiceService
    ) {}
}
