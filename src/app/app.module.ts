import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'

import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore'

import { AppComponent } from './app.component';
import { Component100Component } from './components/component100/component100.component';
import { CatitemComponent } from './components/catitem/catitem.component';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    Component100Component,
    CatitemComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
