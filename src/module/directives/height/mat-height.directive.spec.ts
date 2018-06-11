import {MatHeightDirective} from './mat-height.directive';
import {Component, DebugElement, OnInit, Type} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('MatHeightDirective', () => {

  let component: TestMatHeightLayoutComponent;
  let fixture: ComponentFixture<TestMatHeightLayoutComponent>;
  let div: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestMatHeightLayoutComponent, MatHeightDirective]
    });
    // fixture = TestBed.createComponent(TestMatHeightLayoutComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges(); // initial binding
    // div = fixture.nativeElement.querySelector('div');

    // console.log('div: ', div);
  });

  it('should create an instance', () => {
    const directive = new MatHeightDirective();
    expect(directive).toBeTruthy();
  });

  it('should not have a height style property by default', () => {

    const height = div.style.height;
    expect(height).toBeFalsy();
  });

  it('should have a height style property', () => {

    fixture = TestBed
      .overrideComponent(TestMatHeightLayoutComponent, {
        set: {
          template: `<div matHeight="20px">PlaceHolder Template HTML</div>`,
        }
      })
      .createComponent(TestMatHeightLayoutComponent);

    fixture.detectChanges(); // initial binding

    div = fixture.nativeElement.querySelector('div');

    const height = div.style.height;
    expect(height).toBe('20px');
  });

});

// *****************************************************************
// Template Component
// *****************************************************************

@Component({
  selector: 'mat-height-layout-test',
  template: `
    <div>PlaceHolder Template HTML</div>`
})
class TestMatHeightLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

// *****************************************************************
// Template Component
// *****************************************************************


/**
 * Function generator that captures a Component Type accessor and enables
 * `createTestComponent()` to be reusable for *any* captured Component class.
 */
export function generateTestComponent(getClass: () => Type<any>) {
  let componentAny: Type<any>;

  // Return actual `createTestComponent()` function
  return function createTestComponent(template: string, styles?: any): ComponentFixture<Type<any>> {
    if (!componentAny) {
      // Defer access to Component class to enable metadata to be configured properly...
      componentAny = getClass();
    }
    return TestBed
      .overrideComponent(componentAny, {
        set: {
          template: template,
          styles: styles || [],
        }
      })
      .createComponent(componentAny);
  };
}
