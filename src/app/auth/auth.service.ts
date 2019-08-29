import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>('')
  eventAuthError$ = this.eventAuthError.asObservable()
  
  currentCredential: firebase.auth.UserCredential  // this data was fed into the class via loginUser(), then is shared out of the service
  
  constructor(
    private afAuth:AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ) { }

  loginUser(username: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then(credential => {
        this.currentCredential = credential  // share out of the service the username and password that was entered 
        console.log (this.currentCredential)
      })
    .catch (error => {
      this.eventAuthError.next(error)               // emit the error to the private side
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
