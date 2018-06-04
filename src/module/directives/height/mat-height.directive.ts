import {Directive, Host, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CssUnitValidatorService} from '../../service/css-unit-validator/css-unit-validator.service';

@Directive({
  selector: ''
  + '[matHeight],'
  + '[matMinHeight],'
  + '[matMaxHeight]'
})
export class MatHeightDirective implements OnInit, OnChanges {

  @Input()
  matHeight: number | string;

  @Input()
  matMinHeight: number | string;

  @Input()
  matMaxHeight: number | string;

  @HostBinding('style.height')
  height: string;

  @HostBinding('style.min-height')
  minHeight: string;


  @HostBinding('style.max-height')
  maxHeight: string;

  constructor(@Host() private cssUnitValidator: CssUnitValidatorService) {
  }

  ngOnInit(): void {

    this.height = this.cssUnitValidator.validate(this.matHeight);
    this.minHeight = this.cssUnitValidator.validate(this.matMinHeight);
    this.maxHeight = this.cssUnitValidator.validate(this.matMaxHeight);

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
