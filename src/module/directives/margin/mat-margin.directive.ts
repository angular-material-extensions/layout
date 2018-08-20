import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: ''
    + '.mat-margin'
    + '[mat-margin],'
    + '[mat-margin-top],'
    + '[mat-margin-bottom],'
    + '[mat-margin-left],'
    + '[mat-margin-right],'
    + '[matMargin],'
    + '[matMarginTop],'
    + '[matMarginBottom],'
    + '[matMarginLeft],'
    + '[matMarginRight],'
})
export class MatMarginDirective implements OnInit {

  @Input()
  matMargin: string;

  @Input()
  @HostBinding('style.margin-top')
  matMarginTop: string;

  @Input()
  @HostBinding('style.margin-bottom')
  matMarginBottom: string;

  @Input()
  @HostBinding('style.margin-left')
  matMarginLeft: string;

  @Input()
  @HostBinding('style.margin-right')
  matMarginRight: string;

  ngOnInit(): void {
    if (this.matMargin) {
      this.matMarginTop = this.matMarginBottom = this.matMarginLeft = this.matMarginRight = this.matMargin;
    }
  }

}
