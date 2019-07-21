import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UpdownTopComponent } from './updown-top.component';


const routes: Routes = [
  { path: '', component: UpdownTopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdownTopRoutingModule { }


@NgModule({
  declarations: [
    UpdownTopComponent
  ],
  imports: [
    CommonModule,
    UpdownTopRoutingModule
  ]
})
export class UpdownTopModule { }
