import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[matContainer],'
    + '[mat-container]'
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

  @HostBinding('style.max-width')
  maxWidth: string;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    console.log('innerWidth: ', width);
    let maxWidth;

    if (width < 1200) {
      maxWidth = 1140;
    }
    if (width < 992) {
      maxWidth = 960;
    }
    if (width < 768) {
      maxWidth = 720;
    }
    if (width < 576) {
      maxWidth = 540;
    }

    this.maxWidth = `${maxWidth}px`
  }

}
