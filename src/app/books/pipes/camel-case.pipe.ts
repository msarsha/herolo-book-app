import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'uppercase'
})

export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const words = value.split(' ');
    return words.map(w => {
      const chars = w.split('');
      return chars.map((c, index) => {
        if (index === 0) {
          return c.toUpperCase();
        }
        return c;
      }).join('');
    }).join(' ');
  }
}
