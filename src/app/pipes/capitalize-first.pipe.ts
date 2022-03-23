import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'  //the name is the one you use to call it
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (args.length > 0) {
      const arg = args[0];
    }
    
    const firstChar = value[0];
    const upperFirst = firstChar.toUpperCase();
    const remainingChars = value.slice(1);
    return upperFirst + remainingChars;
  }

}
