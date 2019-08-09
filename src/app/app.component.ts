import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'randomstring'
  blahblah: string = 'We can export class properties from the .ts file to the template'

  constructor() { this.changeName('methoddddreplaced') }  // The constructor runs on when the component is initialized.

  changeName (a: string) {this.title = a}

}
