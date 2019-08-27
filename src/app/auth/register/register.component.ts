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

  createNewUser () {
    this.auth.createUs ( this.email, this.password )
  }


}
