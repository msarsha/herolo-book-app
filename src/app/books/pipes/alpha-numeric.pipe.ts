import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'alphaNumeric'
})
export class AlphaNumericPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value.replace(/[^0-9a-zA-Z ]/gi, '');
  }
}
