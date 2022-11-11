import './polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { LaddaModule } from 'angular2-ladda';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ToasterModule, ToasterService } from 'angular2-toaster';

import { Contact } from './angular/services/contact.resource';
import { ContactService } from './angular/services/contact.service';
import { SearchComponent } from './angular/components/search/search.component';
import { CardComponent } from './angular/components/card/card.component';
import { DefaultImagePipe } from './angular/pipes/default-image.pipe';
import { SpinnerComponent } from './angular/components/spinner/spinner.component';
import { PersonListComponent } from './angular/components/person/person-list/person-list.component';
import { PersonFormComponent } from './angular/components/person/person-form/person-form.component';
import { PersonCreateComponent } from './angular/components/person/person-create/person-create.component';
import { PersonEditComponent } from './angular/components/person/person-edit/person-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppRootComponent } from './angular/app.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    InfiniteScrollModule,
    ToasterModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    Contact,
    ContactService,
    ToasterService
    // toasterServiceProvider,
    // uiRouterStateServiceProvider,
    // uiRouterStateParamsServiceProvider,
  ],
  declarations: [
    DefaultImagePipe,
    SearchComponent,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonFormComponent,
    PersonCreateComponent,
    PersonEditComponent,
    AppRootComponent
  ],
  bootstrap: [
    AppRootComponent
  ]
})
export class AppModule {
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule)