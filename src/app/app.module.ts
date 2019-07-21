import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogoneComponent } from './components/material/dialogone/dialogone.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DemoMaterialModule } from './material-module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InformationComponent } from './components/notes/information/information.component';



@NgModule({
  
  declarations: [
    AppComponent,
    HomepageComponent,
    DialogoneComponent,
    NavbarComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [
    HomepageComponent,
    DialogoneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
