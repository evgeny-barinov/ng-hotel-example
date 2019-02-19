import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlaces'
})
export class FilterPlacesPipe implements PipeTransform {

  transform(places: IRelaxDestination[], type: string): any {
    if (type === '') {
      return places;
    }

    return places.filter((place) => place.type === type);
  }

}
