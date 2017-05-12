import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'yesNo'})
export class YesNoPipe implements PipeTransform {
  transform(value: boolean, args:any ): any {
      var res;      
    return res = value === true ? 'YES' : 'NO';
  }
}