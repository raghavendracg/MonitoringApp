import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'unKnownKey'})
export class UnKnownKey implements PipeTransform {
  transform( value: string, args: any ) : any {
    var res;
    return res = value !== '-' ? value : 'Unknown';
  }
}
