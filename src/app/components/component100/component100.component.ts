import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/Cat'

@Component({
  selector: 'app-component100',
  templateUrl: './component100.component.html',
  styleUrls: ['./component100.component.css']
})
export class Component100Component implements OnInit {
  catlist:Cat[]
  databindedvariable: string
  
  
  constructor() { }

  ngOnInit() {
    this.catlist = [
      {name: 'Toodalie', color: 'Tuxedo', isfed: true},
      {name: 'Zuzu', color: 'Tabby', isfed: false},
      {name: 'Azrael', color: 'Tabby', isfed: true},
      {name: 'Annie', color: 'Black', isfed: false}
    ]
    console.log (this.catlist)
  }

  myHandler ($event){
    console.log (event)
    console.log (event.target.value)

  }
}
