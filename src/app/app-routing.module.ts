import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/customer/contact/contact.component';
import { AboutComponent } from './components/customer/about/about.component';
import { HomeComponent } from './components/customer/home/home.component';
import { LoginComponent } from './components/basic/login/login.component';
import { AuthGuardService } from './servers/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
