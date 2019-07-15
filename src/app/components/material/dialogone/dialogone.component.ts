import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileService } from 'src/app/servers/file.service';

export interface DialogData {
  path: String;
}
@Component({
  selector: 'why-dialogone',
  templateUrl: './dialogone.component.html',
  styleUrls: ['./dialogone.component.styl']
})
export class DialogoneComponent implements OnInit {
  showdata:any;
  constructor(private filesreve:FileService,public dialogRef: MatDialogRef<DialogoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) {
      
    }

  ngOnInit() {
    let options = {responseType:'text'};
    this.filesreve.getFiles(this.data.path,options)
    .subscribe(data => {
      this.showdata = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
