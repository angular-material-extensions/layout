import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLayoutModule} from '@angular-material-extensions/layout';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatLayoutModule.forRoot(),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
