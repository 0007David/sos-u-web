import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CatsComponent} from '../app/cats/cats.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    // { path: 'cats', component: CatsComponent},
    { path : 'login', component: LoginComponent },
    // { path : 'home', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
    
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
