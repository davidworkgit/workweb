import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/servers/file.service';

@Component({
  selector: 'why-vba',
  templateUrl: './vba.component.html',
  styleUrls: ['./vba.component.styl']
})
export class VbaComponent implements OnInit {

  droplist: Map<string, string> = new Map();
  path: string;
  showdata :any;

  constructor(private filesreve:FileService) { }

  ngOnInit() {
    this.showdata = "工欲善其事  必先利其器";
    this.path = 'assets/filepath.json';
    this.filesreve.getFiles(this.path)
    .subscribe((data) => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.droplist.set(key,data[key]);
        }
      }
   }); 
  }

  getText(e){
    //window.location.href = this.droplist.get(e.target.value);
    //window.open(this.droplist.get(e.target.value), '_blank');
    let options = {responseType:'text'};
    this.filesreve.getFiles(this.droplist.get(e.target.value),options)
    .subscribe(data => {
      this.showdata = data;
    });
  }
}
