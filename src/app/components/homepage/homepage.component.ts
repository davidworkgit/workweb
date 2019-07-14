import { DialogoneComponent } from './../material/dialogone/dialogone.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'why-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 2, color: 'lightpink'},
    {text: 'Two', cols: 4, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 2, color: 'lightpink'},
    {text: 'Two', cols: 4, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 2, color: 'lightpink'},
   
  ];
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
