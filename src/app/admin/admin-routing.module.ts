import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import {CatsComponent} from '../cats/cats.component';
import { FormPersonalApoyoComponent } from './form-personal-apoyo/form-personal-apoyo.component';
import { LoginComponent } from '../login/login.component';
import { MapboxComponent } from './mapbox/mapbox.component';



const routes: Routes =[
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    // { path: 'home/cats', component: FormPersonalApoyoComponent},
    { path : 'login', component: LoginComponent},
    { path : 'admin', component: HomeComponent, 
    	children: [
    	{ path: 'cats', component: FormPersonalApoyoComponent},
      { path: 'home', component: MapboxComponent},
    	{ path: '**', component: PagNotFoundComponent },

       ]
      },



    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
