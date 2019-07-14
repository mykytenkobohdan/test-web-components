import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppComponent} from './app.component';
import {NgCardElementComponent} from './ng-card-element/ng-card-element.component';
import { CustomModalComponent } from './ng-card-element/custom-modal/custom-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCardElementComponent,
    CustomModalComponent
  ],
  entryComponents: [NgCardElementComponent], // use entryComponents array instaed of bootstrap because it will be added dynamically.
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.createCustomElements();
  }

  createCustomElements() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    // using built in the browser to create your own custom element name
    customElements.define('custom-card', el);
  }
}
