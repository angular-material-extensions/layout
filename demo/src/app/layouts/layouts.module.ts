import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsComponent} from './layouts.component';
import {AppSharedModule} from '../shared';
import {LayoutsRoutingModule} from './layouts-routing.module';
import { MatHeaderV1Component } from './headers/mat-header-v1/mat-header-v1.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    LayoutsRoutingModule
  ],
  declarations: [LayoutsComponent, MatHeaderV1Component]
})
export class LayoutsModule {
}
