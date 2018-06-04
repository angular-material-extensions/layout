import {MatPaddingDirective} from './mat-padding.directive';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

describe('MatPaddingDirective', () => {
  it('should create an instance', () => {
    const cssUnitValidator: CssUnitValidatorService = new CssUnitValidatorService();
    const directive = new MatPaddingDirective(cssUnitValidator);
    expect(directive).toBeTruthy();
  });
});
