import 'angular';
import 'angular-resource';
import 'angular-animate'

import 'ng-infinite-scroll';
import 'angular-spinner';
import 'angular-auto-validate/dist/jcs-auto-validate';
import 'angular-ladda';
import 'angular-strap';
import 'angularjs-toaster';
import 'angular-ui-router';


import './app.main';
import './components';
import './app.routes';

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

import {
  toasterServiceProvider,
  uiRouterStateServiceProvider,
} from './ajs-upgraded-providers';

import { Contact } from './angular/services/contact.resource';
import { ContactService } from './angular/services/contact.service';
import { SearchComponent } from './angular/components/search/search.component';
import { CardComponent } from './angular/components/card/card.component';
import { DefaultImagePipe } from './angular/pipes/default-image.pipe';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
  ],
  providers: [
    Contact,
    ContactService,
    toasterServiceProvider,
    uiRouterStateServiceProvider,
  ],
  declarations: [
    DefaultImagePipe,
    SearchComponent,
    CardComponent,
  ],
  entryComponents: [
    SearchComponent,
    CardComponent,
  ]
})
export class AppModule {
  // Override Angular bootstrap so it doesn't do anything
  ngDoBootstrap() {
  }
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['codecraft']);
});