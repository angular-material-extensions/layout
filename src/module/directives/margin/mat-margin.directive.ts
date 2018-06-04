import {Directive, Host, HostBinding, Input, OnInit} from '@angular/core';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

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
  matMargin: number | string;

  @Input()
  matMarginTop: number | string;

  @Input()
  matMarginBottom: number | string;

  @Input()
  matMarginLeft: number | string;

  @Input()
  matMarginRight: number | string;

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

  constructor(@Host() private cssUnitValidator: CssUnitValidatorService) {
  }

  ngOnInit(): void {
    this.margin = this.cssUnitValidator.validate(this.matMargin);
    this.marginTop = this.cssUnitValidator.validate(this.matMarginTop);
    this.marginBottom = this.cssUnitValidator.validate(this.matMarginBottom);
    this.marginLeft = this.cssUnitValidator.validate(this.matMarginLeft);
    this.marginRight = this.cssUnitValidator.validate(this.matMarginRight);
  }

}
