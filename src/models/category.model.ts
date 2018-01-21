import {Option} from './option.model'

export class Category {
  primary:boolean;
  text:string;
  options: Array<Option>;
  top: boolean;
}
