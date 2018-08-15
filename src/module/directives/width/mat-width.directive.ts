import {Directive, Host, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: ''
    + '[matWidth],'
    + '[matMinWidth],'
    + '[matMaxWidth]'
})
export class MatWidthDirective implements OnInit {

  @Input()
  matWidth: string;

  @Input()
  matMinWidth: string;

  @Input()
  matMaxWidth: string;

  @HostBinding('style.width')
  width: string;

  @HostBinding('style.min-width')
  minWidth: string;
  
  @HostBinding('style.max-width')
  maxWidth: string;

  ngOnInit(): void {

    this.width = this.matWidth;
    this.minWidth = this.matMinWidth;
    this.maxWidth = this.matMaxWidth;

  }


}
