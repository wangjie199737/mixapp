import { Pipe, PipeTransform } from '@angular/core';
//自定义管道
@Pipe({
  name: 'a'
})
export class APipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
