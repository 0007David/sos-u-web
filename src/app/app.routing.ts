import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {CatsComponent} from '../app/cats/cats.component';
// import {AppmapComponent} from '../app/component/appmap/appmap.component';


// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
    {path: '', component: CatsComponent},
    // {path : 'mapa', component: AppmapComponent }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }