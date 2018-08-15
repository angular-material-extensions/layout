import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsComponent} from './layouts.component';
import {AppSharedModule} from '../shared';
import {LayoutsRoutingModule} from './layouts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    LayoutsRoutingModule
  ],
  declarations: [LayoutsComponent]
})
export class LayoutsModule {
}
