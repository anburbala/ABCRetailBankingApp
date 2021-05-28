import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName : string): any {
    if(value.length === 0 || filterString==='' )
    {
      return value;
    }
    const resultArray=[];

    for (const item in value)
    {
      if(value[item].customerId.toString().includes(filterString))
      {
        resultArray.push(value[item]);
      }
    }
    return resultArray;
  }


}
