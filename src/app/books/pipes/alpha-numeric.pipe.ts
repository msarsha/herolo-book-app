import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'alpha-numeric-pipe'
})

export class AlphaNumericPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const pattern = new RegExp(/[^a-zA-Z0-9 _-]/);
    if (pattern.test(value)) {
      return value.slice(0, value.length - 1);
    }

    return value;
  }
}
