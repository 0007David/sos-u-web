import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';


import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
