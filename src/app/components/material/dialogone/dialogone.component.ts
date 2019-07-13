import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'why-dialogone',
  templateUrl: './dialogone.component.html',
  styleUrls: ['./dialogone.component.styl']
})
export class DialogoneComponent implements OnInit {
  test : String = 'test';
  constructor(public dialogRef: MatDialogRef<DialogoneComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData ) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
