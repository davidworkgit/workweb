import { DialogoneComponent } from './../material/dialogone/dialogone.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'why-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent implements OnInit {

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoneComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      this.animal = result;
    });
  }

}
