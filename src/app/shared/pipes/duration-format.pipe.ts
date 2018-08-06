import { Pipe, PipeTransform } from '@angular/core';

const MIN_IN_OUR = 60;

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {

  transform(minutes: number): string {
    if (!minutes) {
      return '';
    }
    const ours = Math.floor(minutes / MIN_IN_OUR);
    const min = minutes % MIN_IN_OUR;
    return `${ours ? ours + 'h ' : ''}${min}min`;
  }

}
