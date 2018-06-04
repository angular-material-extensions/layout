import {MatWidthDirective} from './mat-width.directive';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

describe('MatWidthDirective', () => {
  it('should create an instance', () => {
    const cssUnitValidator: CssUnitValidatorService = new CssUnitValidatorService();
    const directive = new MatWidthDirective(cssUnitValidator);
    expect(directive).toBeTruthy();
  });
});
