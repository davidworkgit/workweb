import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/servers/file.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogoneComponent } from '../../material/dialogone/dialogone.component';

export interface menulist {
  title: string;
  path: string;
  description: string;
}

@Component({
  selector: 'why-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.styl']
})
export class InformationComponent implements OnInit {
  infoId: string;
  path: string;
  menulist:menulist[];
  displayedColumns: string[] = ['No', 'FileName', 'discription'];
  dataSource = new MatTableDataSource<menulist>(this.menulist);
  
  constructor(private route: ActivatedRoute,private filesreve:FileService,public dialog: MatDialog) {
    this.path = 'assets/filepath.json';
    this.infoId = this.route.snapshot.params['infoId'];
  }

  ngOnInit() {
    this.filesreve.getFiles(this.path)
    .subscribe((data) => {
      this.menulist = data[this.infoId];
     
   }); 
  }

  Openfile(path:String){
    const dialogRef = this.dialog.open(DialogoneComponent, {
      data: {path: path}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }
}
