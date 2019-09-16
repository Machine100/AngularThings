import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFirestore
  ) { }

  
  // async listener

  
  addItem (catName: string, catColor: string){
   
    this.db.collection('AngularThings').doc('Cats').set( catName )  
    .then( e => {
      console.log ('Cat was added to the database')
    })
  }
  
  readDatabase (){
    console.log('arrived at readdatabase')
    return this.db.collection('AngularThings').doc('Cats').valueChanges()   // Returns observable
      
  
  }

  








}
