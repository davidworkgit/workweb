
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ContactComponent } from './components/customer/contact/contact.component';
import { AboutComponent } from './components/customer/about/about.component';
import { HomeComponent } from './components/customer/home/home.component';
import { CalendarComponent } from './components/commans/calendar/calendar.component';
import { EmployeeComponent } from './components/customer/employee/employee.component';
import { DemoMaterialModule } from './material-module';
import { DialogComponent } from './components/commans/dialog/dialog.component';
import { LoginComponent } from './components/basic/login/login.component';
import { NavComponent } from './components/basic/nav/nav.component';

import { EmployeeService } from './servers/employee-server.service';
import { HttpClientModule } from '@angular/common/http';

const myComponents = [
  CalendarComponent,
  ContactComponent,
  AboutComponent,
  HomeComponent,
  DialogComponent,
  EmployeeComponent,
  LoginComponent,
  NavComponent
];

@NgModule({
  entryComponents: [
    DialogComponent,
    ContactComponent,
  ],
  declarations: [
    AppComponent,
    NewCmpComponent,
    myComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
