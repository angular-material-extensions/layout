import { TestBed, inject } from '@angular/core/testing';

import { MatLayoutService } from './mat-layout.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatLayoutService]
    });
  });

  it('should create service', inject([MatLayoutService], (service: MatLayoutService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([MatLayoutService], (service: MatLayoutService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([MatLayoutService], (service: MatLayoutService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
