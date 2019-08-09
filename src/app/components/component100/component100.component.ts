import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/Cat'

@Component({
  selector: 'app-component100',
  templateUrl: './component100.component.html',
  styleUrls: ['./component100.component.css']
})
export class Component100Component implements OnInit {
  catlist:Cat[]
  
  constructor() { }

  ngOnInit() {
    this.catlist = [
      {name: 'Toodalie', color: 'Tuxedo'},
      {name: 'Zuzu', color: 'Tabby'},
      {name: 'Azrael', color: 'Tabby'},
      {name: 'Annie', color: 'Black'}
    ]
    console.log (this.catlist)
  }
}
