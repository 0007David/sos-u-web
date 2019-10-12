import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppfooterComponent } from '../component/appfooter/appfooter.component';
import { AppsidebarComponent } from '../component/appsidebar/appsidebar.component';
import { AppnavbarComponent } from '../component/appnavbar/appnavbar.component';
import { HomeComponent } from './home/home.component';
import { FormPersonalApoyoComponent } from './form-personal-apoyo/form-personal-apoyo.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { MapboxComponent } from './mapbox/mapbox.component';


@NgModule({
  declarations: [
  HomeComponent,
  AppfooterComponent,
  AppnavbarComponent,
  AppsidebarComponent,
  FormPersonalApoyoComponent,
  PagNotFoundComponent,
  MapboxComponent

  ],

  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
