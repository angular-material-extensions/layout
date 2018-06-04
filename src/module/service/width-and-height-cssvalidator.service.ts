import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidthAndHeightCSSValidatorService {

  constructor() {
  }

  validate(value: number | string): string {
    if (typeof value === 'number') {
      return `${value}%`;
    } else if (typeof value === 'string') {
      return value;
    } else {
      throw new Error('unsupported type');
    }
  }
}
