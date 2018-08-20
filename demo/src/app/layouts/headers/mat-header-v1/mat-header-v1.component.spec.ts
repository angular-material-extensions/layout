import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatHeaderV1Component } from './mat-header-v1.component';

describe('MatHeaderV1Component', () => {
  let component: MatHeaderV1Component;
  let fixture: ComponentFixture<MatHeaderV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatHeaderV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatHeaderV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
