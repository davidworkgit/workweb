import { Component, OnInit } from '@angular/core';
import { asEnumerable } from 'linq-es2015';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'why-updown-top',
  templateUrl: './updown-top.component.html',
  styleUrls: ['./updown-top.component.styl']
})
export class UpdownTopComponent implements OnInit {
  count: any;
  selectedFile: File;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('gs://fir-demo-project.appspot.com', uploadData)
      .subscribe(res => console.log(res));
  }
  testclick(){
   
    this.count = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).Where(a => a % 2 == 0).ToArray();
    console.log(this.count);
  }
  
}
