import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLayoutModule} from '@angular-material-extensions/layout';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatLayoutModule.forRoot(),
    HomeRoutingModule,
    MatCardModule,
  ],
  providers: [],
  declarations: [HomeComponent],
})
export class HomeModule {
}
