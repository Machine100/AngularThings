import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../../models/Cat'

@Component({
  selector: 'app-catitem',
  templateUrl: './catitem.component.html',
  styleUrls: ['./catitem.component.css']
})
export class CatitemComponent implements OnInit {
    @Input() cat: Cat

  constructor() { }

  ngOnInit() {
    console.log(this.cat)
  }

}
