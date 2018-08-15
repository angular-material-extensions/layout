import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {UtilitiesComponent} from './utilities.component';
import {ContainerComponent} from './container/container.component';
import {MarginComponent} from './margin/margin.component';
import {PaddingComponent} from './padding/padding.component';
import {WidthComponent} from './width/width.component';
import {HeightComponent} from './height/height.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: UtilitiesComponent},
    {path: 'container', component: ContainerComponent},
    {path: 'margin', component: MarginComponent},
    {path: 'padding', component: PaddingComponent},
    {path: 'width', component: WidthComponent},
    {path: 'height', component: HeightComponent},
  ])],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule {
}
