import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-readdatabase',
  templateUrl: './readdatabase.component.html',
  styleUrls: ['./readdatabase.component.css']
})
export class ReaddatabaseComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  rdb() {
    console.log ('arrived at rdb')
    
  }

}
