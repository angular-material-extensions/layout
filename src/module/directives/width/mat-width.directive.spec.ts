import {MatWidthDirective} from './mat-width.directive';
import {WidthAndHeightCSSValidatorService} from '../../service/width-and-height-cssvalidator.service';

describe('MatWidthDirective', () => {
  it('should create an instance', () => {
    const cssValidator: WidthAndHeightCSSValidatorService = new WidthAndHeightCSSValidatorService();
    const directive = new MatWidthDirective(cssValidator);
    expect(directive).toBeTruthy();
  });
});
