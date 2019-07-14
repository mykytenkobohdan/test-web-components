import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppComponent} from './app.component';
import {NgCardElementComponent} from './ng-card-element/ng-card-element.component';
import {AlertComponent} from './alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCardElementComponent,
    AlertComponent
  ],
  entryComponents: [
    NgCardElementComponent,
    AlertComponent
  ], // use entryComponents array instaed of bootstrap because it will be added dynamically.
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.ngDoBootstrap();
  }

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    // using built in the browser to create your own custom element name
    customElements.define('facebook-card', el);

    const alert = createCustomElement(AlertComponent, {
      injector: this.injector
    });

    customElements.define('alert-element', alert);
  }
}
