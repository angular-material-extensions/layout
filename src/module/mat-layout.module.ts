import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {MatLayoutService} from './service/mat-layout.service';
import {MatPaddingDirective} from './directives/padding/mat-padding.directive';
import {MatMarginDirective} from './directives/margin/mat-margin.directive';
import {MatHeightDirective} from './directives/height/mat-height.directive';
import {MatWidthDirective} from './directives/width/mat-width.directive';

// Export module's public API
export {MatLayoutService} from './service/mat-layout.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatPaddingDirective,
    MatMarginDirective,
    MatHeightDirective,
    MatWidthDirective
  ],
  declarations: [
    MatPaddingDirective,
    MatMarginDirective,
    MatHeightDirective,
    MatWidthDirective
  ]
})
export class MatLayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLayoutModule,
      providers: [MatLayoutService]
    };
  }
}
