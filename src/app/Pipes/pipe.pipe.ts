import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var name= value as string;
    return name.toLowerCase();
  }

}
