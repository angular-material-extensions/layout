import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: ''
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
  matPaddingTop: string;

  @Input()
  matPaddingBottom: string;

  @Input()
  matPaddingLeft: string;

  @Input()
  matPaddingRight: string;

  @HostBinding('style.padding')
  padding: string;

  @HostBinding('style.padding-top')
  paddingTop: string;

  @HostBinding('style.padding-bottom')
  paddingBottom: string;

  @HostBinding('style.padding-left')
  paddingLeft: string;

  @HostBinding('style.padding-right')
  paddingRight: string;


  ngOnInit(): void {
    this.padding = this.matPadding;
    this.paddingTop = this.matPaddingTop;
    this.paddingBottom = this.matPaddingBottom;
    this.paddingLeft = this.matPaddingLeft;
    this.paddingRight = this.matPaddingRight;
  }

}
