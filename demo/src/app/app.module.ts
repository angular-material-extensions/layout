
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Add .withServerTransition() to support Universal rendering.
        // The application ID can be any identifier which is unique on
        // the page.
        BrowserModule.withServerTransition({ appId: '@angular-material-extensions/layout-demo-id' }),
        TransferHttpCacheModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AppSharedModule,
        HomeModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
