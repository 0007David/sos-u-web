import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';


import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppsidebarComponent } from './component/appsidebar/appsidebar.component';
import { AppsettingsComponent } from './component/appsettings/appsettings.component';
import { AppnavbarComponent } from './component/appnavbar/appnavbar.component';
import { AppmapComponent } from './component/appmap/appmap.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppsidebarComponent,
    AppsettingsComponent,
    AppnavbarComponent,
    AppmapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
