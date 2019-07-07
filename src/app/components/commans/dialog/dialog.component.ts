import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'why-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.styl']
})

export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
