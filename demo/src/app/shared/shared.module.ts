import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {MatLayoutModule} from '@angular-material-extensions/layout'
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {MatCardModule, MatRippleModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    MarkdownModule.forChild(),
    FlexLayoutModule,
    MatLayoutModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    FlexLayoutModule,
    MatLayoutModule,
    MarkdownModule,
    MatCardModule,
    MatRippleModule,
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
