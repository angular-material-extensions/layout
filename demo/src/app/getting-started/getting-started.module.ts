import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {AppSharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    AppSharedModule
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule {
}
