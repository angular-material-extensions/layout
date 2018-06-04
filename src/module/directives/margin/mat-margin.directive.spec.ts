import { MatMarginDirective } from './mat-margin.directive';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

describe('MatMarginDirective', () => {
  it('should create an instance', () => {
    const cssUnitValidator: CssUnitValidatorService = new CssUnitValidatorService();
    const directive = new MatMarginDirective(cssUnitValidator);
    expect(directive).toBeTruthy();
  });
});
