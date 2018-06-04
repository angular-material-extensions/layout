import {Directive, Host, HostBinding, Input, OnInit} from '@angular/core';
import {WidthAndHeightCSSValidatorService} from '../../service/width-and-height-cssvalidator.service';

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

  constructor(@Host() private cssValidator: WidthAndHeightCSSValidatorService) {
  }

  ngOnInit(): void {

    this.width = this.cssValidator.validate(this.matWidth);
    this.minWidth = this.cssValidator.validate(this.matMinWidth);
    this.maxWidth = this.cssValidator.validate(this.matMaxWidth);

  }


}
