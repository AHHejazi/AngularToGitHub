import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    if (!value) { return null; }
    const actuallimit = (limit) ? limit : 20;
    return value.substring(0, actuallimit) + '....';
    return null;
  }

}
