import { TestBed, inject } from '@angular/core/testing';

import { CssUnitValidatorService } from './css-unit-validator.service';

describe('CssUnitValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CssUnitValidatorService]
    });
  });

  it('should be created', inject([CssUnitValidatorService], (service: CssUnitValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
