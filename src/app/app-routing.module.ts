import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VbaComponent } from './components/notes/vba/vba.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'vba', component: VbaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
