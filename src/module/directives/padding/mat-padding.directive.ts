import {Directive, Host, HostBinding, Input, OnInit} from '@angular/core';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

@Directive({
  selector: ''
  + '.mat-padding'
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
  matPadding: number | string;

  @Input()
  matPaddingTop: number | string;

  @Input()
  matPaddingBottom: number | string;

  @Input()
  matPaddingLeft: number | string;

  @Input()
  matPaddingRight: number | string;

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


  constructor(@Host() private cssUnitValidator: CssUnitValidatorService) {
  }

  ngOnInit(): void {
    this.padding = this.cssUnitValidator.validate(this.matPadding);
    this.paddingTop = this.cssUnitValidator.validate(this.matPaddingTop);
    this.paddingBottom = this.cssUnitValidator.validate(this.matPaddingBottom);
    this.paddingLeft = this.cssUnitValidator.validate(this.matPaddingLeft);
    this.paddingRight = this.cssUnitValidator.validate(this.matPaddingRight);
  }

}
