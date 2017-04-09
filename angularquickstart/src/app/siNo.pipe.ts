import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'siNo'})
export class SiNoPipe implements PipeTransform {
  transform(value: boolean): string {         
    if (value) {
       
      return "Si";
    }
    else {return "No"}
  }
}