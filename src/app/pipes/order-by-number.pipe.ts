import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByNumber'
})
export class OrderByNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
