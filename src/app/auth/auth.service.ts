import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUsername: string  // this data was fed into the class via loginUser(), then is shared out of the service
  currentCredential: any

  constructor(
    private afAuth:AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ) { }

  loginUser(username: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then(userCredential => {
        this.currentUsername = username  // share out of the service the username and password that was entered
        console.log (userCredential)  
      })
  }

  registerUser(email: string, password: string){
     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
       .then(userCredential => {
         this.currentUsername = email
       })
 
      }
  }

  }
