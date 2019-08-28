import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string
  password: string

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onUsernameKeypress (event) { 
    this.email = event.target.value 
    console.log (this.email)
  }

  onPasswordKeypress (event) { 
    this.password = event.target.value 
    console.log (this.password)
  }

  createNewUser () {
    this.auth.registerUser ( this.email, this.password )
  }


}
