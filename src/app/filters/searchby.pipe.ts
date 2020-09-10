import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})

export class SearchByPipe implements PipeTransform {
  transform(array: Array<string>, prop: string, propVal: string): any {
    return array && array.filter(pet => pet[prop] === propVal);
  }
}