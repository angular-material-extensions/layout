import { TestBed, inject } from '@angular/core/testing';

import { WidthAndHeightCSSValidatorService } from './width-and-height-cssvalidator.service';

describe('WidthAndHeightCSSValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidthAndHeightCSSValidatorService]
    });
  });

  it('should be created', inject([WidthAndHeightCSSValidatorService], (service: WidthAndHeightCSSValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
