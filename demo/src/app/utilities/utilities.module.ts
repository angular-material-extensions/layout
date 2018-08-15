import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilitiesComponent} from './utilities.component';
import {AppSharedModule} from '../shared';
import {UtilitiesRoutingModule} from './utilities-routing.module';
import { ContainerComponent } from './container/container.component';
import { PaddingComponent } from './padding/padding.component';
import { MarginComponent } from './margin/margin.component';
import { WidthComponent } from './width/width.component';
import { HeightComponent } from './height/height.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    UtilitiesRoutingModule
  ],
  declarations: [UtilitiesComponent, ContainerComponent, PaddingComponent, MarginComponent, WidthComponent, HeightComponent]
})
export class UtilitiesModule {
}
