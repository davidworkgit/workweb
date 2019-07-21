import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './components/notes/information/information.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'info/:infoId', component: InformationComponent},
  { path: 'updownload', loadChildren: () =>import('./components/updownload/updown-top.module').then(mod => mod.UpdownTopModule)},
  //{ path: 'updownload', loadChildren:'./components/updownload/updown-top.module#UpdownTopModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
