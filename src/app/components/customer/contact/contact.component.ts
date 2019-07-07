import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from 'src/app/components/commans/dialog/dialog.component';

@Component({
  selector: 'why-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})

export class ContactComponent implements OnInit {

  animal: string;
  name: string;

  ngOnInit() {
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}
