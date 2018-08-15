import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginComponent } from './margin.component';

describe('MarginComponent', () => {
  let component: MarginComponent;
  let fixture: ComponentFixture<MarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
