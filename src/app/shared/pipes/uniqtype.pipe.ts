import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqtype'
})
export class UniqtypePipe implements PipeTransform {

  transform(places: IRelaxDestination[]): string[] {
    const types: string[] = places.map((place) => place.type);
    return Array.from(new Set(types));
  }

}
