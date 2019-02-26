export const GET_PLACES_PENDING = 'GET_PLACES_PENDING';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
export const GET_PLACES_ERROR = 'GET_PLACES_ERROR';

export class GetPlacesPending {
    public readonly type = GET_PLACES_PENDING;
}

export class GetPlacesSuccess {
    public readonly type = GET_PLACES_SUCCESS;

    public constructor(public payload: IRelaxDestination[]) {}
}

export class GetPlacesError {
    public readonly type = GET_PLACES_ERROR;

    public constructor(public payload: any) {}
}


export type PlacesAction = GetPlacesError | GetPlacesSuccess | GetPlacesPending;
