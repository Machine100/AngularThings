import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-catdashboard',
  templateUrl: './catdashboard.component.html',
  styleUrls: ['./catdashboard.component.css']
})
export class CatdashboardComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.readDatabase().subscribe(result=>
    console.log(result))
  }

}
