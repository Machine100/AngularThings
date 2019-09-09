import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../auth/auth.service'
import { UserInfo } from '../../models/UserInfo'
//import { auth } from 'firebase'
//import { auth } from 'firebase'
                 // import RXjs?

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {

  userInfo : UserInfo
  accountobserver: any = {
    next: function onNext (value) {}
    //error: {},
    //complete: {}
  }
  
  constructor(private authService: AuthService) { }   

  ngOnInit() {
    this.authService.eventUserInfo$.subscribe (userInfo => (this.userInfo = userInfo))
  }

}
