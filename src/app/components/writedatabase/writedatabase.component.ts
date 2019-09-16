import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-writedatabase',
  templateUrl: './writedatabase.component.html',
  styleUrls: ['./writedatabase.component.css']
})
export class WritedatabaseComponent implements OnInit {

  catName: string
  catColor: string

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  onNameKeypress (event) {
    console.log (event.target.value)
    this.catName = event.target.value
  }
  
  onColorKeypress (event) {
    console.log (event.target.value)
    this.catColor = event.target.value
  }
  
  onSubmit () {
    console.log ('arrived at onSubmit')
    this.db.addItem (this.catName, this.catColor)
  }

  //  wdb() {
//    this.db.readDatabase().subscribe(result=>
 //   console.log(result))       
//  }

//  writeItem () {
//    this.db.addItem ('mockitem')
//  }


}