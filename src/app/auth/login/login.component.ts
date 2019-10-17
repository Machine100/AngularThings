import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  authError: any
  username: string
  password: string

  constructor(private auth: AuthService) { }

  
  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError=data
      console.log('via observable:', data)
    })
  }

  onSubmitKeypress () {
    this.auth.loginUser( this.username, this.password)
  }
  
  onUsernameKeypress (event) { 
    this.username = event.target.value 
    console.log (this.username)
  }

  onPasswordKeypress (event) { 
    this.password = event.target.value 
    console.log (this.password)
  }

}
