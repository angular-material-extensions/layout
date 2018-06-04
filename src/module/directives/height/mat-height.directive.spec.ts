import {MatHeightDirective} from './mat-height.directive';
import {WidthAndHeightCSSValidatorService} from '../../service/width-and-height-cssvalidator.service';

describe('MatHeightDirective', () => {
  it('should create an instance', () => {
    const cssValidator: WidthAndHeightCSSValidatorService = new WidthAndHeightCSSValidatorService();
    const directive = new MatHeightDirective(cssValidator);
    expect(directive).toBeTruthy();
  });
});
