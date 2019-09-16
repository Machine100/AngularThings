import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'

import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
// import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { environment } from 'src/environments/environment';
import { AuthbuttonbarComponent } from './components/authbuttonbar/authbuttonbar.component';
import { ReaddatabaseComponent } from './components/readdatabase/readdatabase.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountinfoComponent } from './components/accountinfo/accountinfo.component';
import { WritedatabaseComponent } from './components/writedatabase/writedatabase.component';
import { CatdashboardComponent } from './components/catdashboard/catdashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    AuthbuttonbarComponent,
    ReaddatabaseComponent,
    NavbarComponent,
    AccountinfoComponent,
    WritedatabaseComponent,
    CatdashboardComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
