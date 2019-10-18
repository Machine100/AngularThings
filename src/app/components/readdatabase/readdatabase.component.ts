import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-readdatabase',
  templateUrl: './readdatabase.component.html',
  styleUrls: ['./readdatabase.component.css']
})
export class ReaddatabaseComponent implements OnInit {

  cats:any

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  rdb() {
    this.db.readDatabase().subscribe(result=>{
      console.log(result)
      this.cats = [{name: 'one'},{name:'two'}]

    }) 
    
  }

}
