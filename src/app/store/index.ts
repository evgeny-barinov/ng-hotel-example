import { ActionReducerMap } from '@ngrx/store';
import {placesReducer, selectPlaceReducer} from './reducers/places.reducer';

export interface IStore {
    places: IRelaxDestination[];
    selectedPlace: IRelaxDestination;
}

export const reducers: ActionReducerMap<IStore> = {
    places: placesReducer,
    selectedPlace: selectPlaceReducer
};
