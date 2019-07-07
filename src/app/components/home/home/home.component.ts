import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/servers/file.service';

@Component({
  selector: 'why-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(private filesreve:FileService) { }

  ngOnInit() {
    this.filesreve.getFiles()
    .subscribe((data) => {
      console.log(data);
      window.open(data['margeFile']);
  });
  }

}
