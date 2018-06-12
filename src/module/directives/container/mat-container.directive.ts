import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[MatContainer], [mat-container], .matContainer'
})
export class MatContainerDirective {

  @HostBinding('style.width')
  width = `${100}%`;

  @HostBinding('style.padding-right')
  paddingRight = `${15}px`;

  @HostBinding('style.padding-left')
  paddingLeft = `${15}px`;

  @HostBinding('style.margin-left')
  marginLeft = 'auto';

  @HostBinding('style.margin-right')
  marginRight = 'auto';

}
