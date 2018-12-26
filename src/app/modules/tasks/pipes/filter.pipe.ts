import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../../../interfaces/tasks.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ITask[], args?: string): any {
    if (!value) {
      return [];
    }

    if (!args) {
      return value;
    }

    return value.filter((item: ITask) => {
      return item.description.toLowerCase().indexOf(args.toLowerCase()) !== -1;
    });
  }

}
