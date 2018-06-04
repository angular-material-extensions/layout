import {Directive, Host, HostBinding, Input, OnInit} from '@angular/core';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

@Directive({
  selector: ''
  + '[matWidth],'
  + '[matMinWidth],'
  + '[matMaxWidth]'
})
export class MatWidthDirective implements OnInit {

  @Input()
  matWidth: number | string;

  @Input()
  matMinWidth: number | string;

  @Input()
  matMaxWidth: number | string;

  @HostBinding('style.width')
  width: string;

  @HostBinding('style.min-width')
  minWidth: string;


  @HostBinding('style.max-width')
  maxWidth: string;

  constructor(@Host() private cssUnitValidator: CssUnitValidatorService) {
  }

  ngOnInit(): void {

    this.width = this.cssUnitValidator.validate(this.matWidth);
    this.minWidth = this.cssUnitValidator.validate(this.matMinWidth);
    this.maxWidth = this.cssUnitValidator.validate(this.matMaxWidth);

  }


}
