import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst' //the name is the one you use to call it
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (args.length>0) {
      const arg = args[0]
    }
    
    return value[0].toUpperCase() + value.slice(1);
  }

}
