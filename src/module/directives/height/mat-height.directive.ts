import {Directive, Host, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WidthAndHeightCSSValidatorService} from '../../service/width-and-height-cssvalidator.service';

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

  constructor(@Host() private cssValidator: WidthAndHeightCSSValidatorService) {
  }

  ngOnInit(): void {

    this.height = this.cssValidator.validate(this.matHeight);
    this.minHeight = this.cssValidator.validate(this.matMinHeight);
    this.maxHeight = this.cssValidator.validate(this.matMaxHeight);

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
