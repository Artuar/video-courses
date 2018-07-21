import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(filterArray: {}[], propName: string, propValue: string = ''): {}[] {

    return filterArray.filter(obj => {
      const value = obj[propName];
      return value && value.toLowerCase().indexOf(propValue.toLowerCase()) !== -1;
    });

  }

}
