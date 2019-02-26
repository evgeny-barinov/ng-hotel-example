import { ActionReducerMap } from '@ngrx/store';
import {placesReducer} from './reducers/places.reducer';

export interface IStore {
    places: IRelaxDestination[];
}

export const reducers: ActionReducerMap<IStore> = {
    places: placesReducer
};
