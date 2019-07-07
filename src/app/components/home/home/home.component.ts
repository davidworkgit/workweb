import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/servers/file.service';

@Component({
  selector: 'why-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  droplist: Map<string, string> = new Map();
  path: string;
  constructor(private filesreve:FileService) { }

  ngOnInit() {
    this.path = 'assets/filepath.json';
    this.filesreve.getFiles(this.path)
    .subscribe((data) => {
      this.droplist.set('test','')
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.droplist.set(key,data[key]);
        }
      }
   }); 
  }

  getText(e){
    window.location.href = this.droplist.get(e.target.value);
    //window.open(this.droplist.get(e.target.value), '_blank');
    // this.filesreve.getFiles(this.droplist.get(e.target.value))
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }

}
