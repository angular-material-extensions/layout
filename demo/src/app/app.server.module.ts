import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    FlexLayoutServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
