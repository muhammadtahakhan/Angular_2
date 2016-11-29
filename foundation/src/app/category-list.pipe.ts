import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var category = [];
    value.forEach(element => {
      if(category.indexOf(element.category) <= -1){
           category.push(element.category);
      }
      
    });
  return category.join(', ');
  }

}
