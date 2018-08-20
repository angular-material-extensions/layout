import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector:
    '[.mat-padding],'
    + '[mat-padding],'
    + '[mat-padding-top],'
    + '[mat-padding-bottom],'
    + '[mat-padding-left],'
    + '[mat-padding-right],'
    + '[matPadding],'
    + '[matPaddingTop],'
    + '[matPaddingBottom],'
    + '[matPaddingLeft],'
    + '[matPaddingRight],'
})
export class MatPaddingDirective implements OnInit {

  @Input()
  matPadding: string;

  @Input()
  @HostBinding('style.padding-top')
  matPaddingTop: string;

  @Input()
  @HostBinding('style.padding-bottom')
  matPaddingBottom: string;

  @Input()
  @HostBinding('style.padding-left')
  matPaddingLeft: string;

  @Input()
  @HostBinding('style.padding-right')
  matPaddingRight: string;

  ngOnInit(): void {
    if (this.matPadding) {
      this.matPaddingTop = this.matPaddingBottom = this.matPaddingLeft = this.matPaddingRight = this.matPadding;
    }
  }

}
