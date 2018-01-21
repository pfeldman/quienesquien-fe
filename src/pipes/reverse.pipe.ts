import { Pipe, PipeTransform } from '@angular/core';
import {Category} from "../models/category.model";

@Pipe({
  name: 'reverse',
  pure: false
})

export class ReversePipe implements PipeTransform {
  transform(values: Array<Category>): Array<Category> {
    return values.reverse();
  }
}
