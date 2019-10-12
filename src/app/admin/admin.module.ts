import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppheaderComponent } from '../component/appheader/appheader.component';
import { AppfooterComponent } from '../component/appfooter/appfooter.component';
import { AppsidebarComponent } from '../component/appsidebar/appsidebar.component';
import { AppsettingsComponent } from '../component/appsettings/appsettings.component';
import { AppnavbarComponent } from '../component/appnavbar/appnavbar.component';
import { AppmapComponent } from '../component/appmap/appmap.component';
import { HomeComponent } from './home/home.component';
import { FormPersonalApoyoComponent } from './form-personal-apoyo/form-personal-apoyo.component';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { MapboxComponent } from './mapbox/mapbox.component';


@NgModule({
  declarations: [
  HomeComponent,
  AppfooterComponent,
  AppnavbarComponent,
  AppheaderComponent,
  AppsidebarComponent,
  AppsettingsComponent,
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
