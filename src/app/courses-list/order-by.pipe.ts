import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(sortingArr: {}[], field: string): {}[] {
    if (!field) {
      return sortingArr;
    }
    return sortingArr.sort((a, b) => {
      return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0;
    });
  }

}
