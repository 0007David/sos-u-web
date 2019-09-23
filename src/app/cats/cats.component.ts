import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  //array de objetos
  public cats = [];

  constructor(
    private fireStServ: FirestoreService
  ) { }

  ngOnInit() {
    this.fireStServ.getCats().subscribe((catsSnapshot) => {
      this.cats = [];
      catsSnapshot.forEach((catData: any) => {
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }

}
