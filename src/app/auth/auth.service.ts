import { Injectable } from '@angular/core'
// import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
// import { AngularFirestore } from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs'
import { UserInfo } from '../models/UserInfo'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserInfo : UserInfo = {displayname:'',email:'',uid:''}
  currentCredential: firebase.auth.UserCredential

  private eventAuthError = new BehaviorSubject<string>('')
  eventAuthError$ = this.eventAuthError.asObservable()       // All authorization errors go out on a stream
  
  private eventUserInfo = new BehaviorSubject<UserInfo>({displayname:'', email:'', uid:''})
  eventUserInfo$ = this.eventUserInfo.asObservable()         // User information is placed into a stream when they log in

  constructor(
    private afAuth:AngularFireAuth,
    // private db: AngularFirestore,
    // private router: Router
    ) { }

  buildUserObject () {                                   // I'm an impure function
    this.currentUserInfo.displayname = this.currentCredential.user.displayName   
    this.currentUserInfo.email = this.currentCredential.user.email
    this.currentUserInfo.uid = this.currentCredential.user.uid
    }
  
  loginUser(username: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then(credential => {
        console.log ('login sucessful', credential)
        this.currentCredential = credential              // Store the full credential locally.
        this.buildUserObject()                           // Parse the full cred for the important parts,
        this.eventUserInfo.next(this.currentUserInfo)    // then share them out to the application.
        })
      .catch (error => {
        this.eventAuthError.next(error)
      })
    }

  logoutUser (){
    this.afAuth.auth.signOut()
      .then(e => { 
        this.currentCredential = null
        this.currentUserInfo.displayname = ''
        this.currentUserInfo.email = ''
        this.currentUserInfo.uid = ''
        console.log ('cred is now:', this.currentCredential, this.currentUserInfo)                         
      })
      .catch(error=>{
        this.eventAuthError.next(error)  
      })
    }
  
  registerUser(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then (credential => {
        this.currentCredential = credential
        console.log(this.currentCredential)
      })
      .catch (error => {
        this.eventAuthError.next(error)
      })
    
    
  }
  

}
