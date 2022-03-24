import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByNumber',
})
export class OrderByNumberPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): any[] {

    if (args[0]) {          //args[0] is property name in this case
      const firstElem = value[0]
      if (typeof firstElem[args[0]] === 'number') {
         return value.sort((a, b) => a[args[0]] - b[args[0]]);
      }
      return value;
    } else {
      return value;
    }
  }
}
