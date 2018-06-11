import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {MatLayoutService} from './service/mat-layout.service';
import {MatPaddingDirective} from './directives/padding/mat-padding.directive';
// Directives
import {CssUnitValidatorService} from './service/css-unit-validator/css-unit-validator.service';
import {MatMarginDirective} from './directives/margin/mat-margin.directive';
import {MatHeightDirective} from './directives/height/mat-height.directive';
import {MatWidthDirective} from './directives/width/mat-width.directive';
import {MatContainerDirective} from './directives/container/mat-container.directive';

// Export module's public API
export {MatLayoutService} from './service/mat-layout.service';
export {CssUnitValidatorService} from './service/css-unit-validator/css-unit-validator.service';

const ALL_DIRECTIVES =
  [
    MatPaddingDirective,
    MatMarginDirective,
    MatHeightDirective,
    MatWidthDirective,
    MatContainerDirective
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [...ALL_DIRECTIVES],
  declarations: [...ALL_DIRECTIVES]
})
export class MatLayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLayoutModule,
      providers: [MatLayoutService]
    };
  }
}
