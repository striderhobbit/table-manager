import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform<T>(items: T[], key: keyof T, value: T[keyof T]): T[] {
        return items.filter((item: T): boolean => item[key] === value);
    }

}