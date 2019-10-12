import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appnavbar',
  templateUrl: './appnavbar.component.html',
  styleUrls: ['./appnavbar.component.css']
})
export class AppnavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  routeo(ruta: string){
  	this.router.navigate(['login']);
  }
}
