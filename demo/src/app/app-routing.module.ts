import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule',
  },
  {
    path: 'utilities',
    loadChildren: './utilities/utilities.module#UtilitiesModule'
  },
  {
    path: 'layouts',
    loadChildren: 'app/layouts/layouts.module#LayoutsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
