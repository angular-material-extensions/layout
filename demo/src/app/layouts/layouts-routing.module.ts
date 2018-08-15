import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutsComponent} from './layouts.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: LayoutsComponent}
  ])],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {
}
