import {MatHeightDirective} from './mat-height.directive';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

describe('MatHeightDirective', () => {
  it('should create an instance', () => {
    const cssUnitValidator: CssUnitValidatorService = new CssUnitValidatorService();
    const directive = new MatHeightDirective(cssUnitValidator);
    expect(directive).toBeTruthy();
  });
});
