import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs'
import { UserInfo } from '../models/UserInfo'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>('')   // Auth errors go out as an observable
  eventAuthError$ = this.eventAuthError.asObservable()       // These are pushed out and trigger events
                                                             // on clients that subscribe.
  
  currentCredential: firebase.auth.UserCredential  // The user cred is shared out of the service
                                                   // as a plain variable. This has to be manually 
                                                   // updated by the client.
  
  private eventUserInfo = new BehaviorSubject<UserInfo>({displayname:'', email:'', uid:''})
  eventUserInfo$ = this.eventUserInfo.asObservable()

  constructor(
    private afAuth:AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ) { }

  loginUser(username: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then(credential => {
        console.log ('login sucessful', credential)
        this.currentCredential = credential     // store the credential
  //      this.eventUserInfo.next(credential)     // observe out a subset of the credential
      })
    .catch (error => {
      this.eventAuthError.next(error)
    })
    }

    logoutUser (){
      this.afAuth.auth.signOut()
        .then() //need to wipe currentCredential
    }
  
  registerUser(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.currentCredential = credential
        console.log (this.currentCredential)
      })
 
    
  }
  

}
