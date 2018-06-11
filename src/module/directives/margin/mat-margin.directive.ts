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
  matMarginTop: string;

  @Input()
  matMarginBottom: string;

  @Input()
  matMarginLeft: string;

  @Input()
  matMarginRight: string;

  @HostBinding('style.margin')
  margin: string;

  @HostBinding('style.margin-top')
  marginTop: string;

  @HostBinding('style.margin-bottom')
  marginBottom: string;

  @HostBinding('style.margin-left')
  marginLeft: string;

  @HostBinding('style.margin-right')
  marginRight: string;

  ngOnInit(): void {
    this.margin = this.matMargin;
    this.marginTop = this.matMarginTop;
    this.marginBottom = this.matMarginBottom;
    this.marginLeft = this.matMarginLeft;
    this.marginRight = this.matMarginRight;
  }

}
