import {Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: ''
  + '[matHeight],'
  + '[matMinHeight],'
  + '[matMaxHeight]'
})
export class MatHeightDirective implements OnInit, OnChanges {

  @Input()
  matHeight: string;

  @Input()
  matMinHeight: string;

  @Input()
  matMaxHeight: string;

  @HostBinding('style.height')
  height: string;

  @HostBinding('style.min-height')
  minHeight: string;


  @HostBinding('style.max-height')
  maxHeight: string;

  ngOnInit(): void {

    this.height = this.matHeight;
    this.minHeight = this.matMinHeight;
    this.maxHeight = this.matMaxHeight;

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
