import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLayoutModule} from '@angular-material-extensions/layout';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    MatLayoutModule.forRoot(),
    FlexLayoutModule,
    HomeRoutingModule,
    AppSharedModule,
  ],
  providers: [],
  declarations: [HomeComponent],
})
export class HomeModule {
}
