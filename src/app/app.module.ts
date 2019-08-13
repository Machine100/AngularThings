import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component100Component } from './components/component100/component100.component';
import { CatitemComponent } from './components/catitem/catitem.component';

@NgModule({
  declarations: [
    AppComponent,
    Component100Component,
    CatitemComponent
  ],
  imports: [
    BrowserModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
