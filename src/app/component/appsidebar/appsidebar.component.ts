import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appsidebar',
  templateUrl: './appsidebar.component.html',
  styleUrls: ['./appsidebar.component.css']
})
export class AppsidebarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  routeo(ruta: string){

  	this.router.navigate(['/admin/'+ruta]);

  }

}
