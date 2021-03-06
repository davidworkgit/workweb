import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  constructor(private http: HttpClient) { 
  }

  getFiles(path: any,Options?){

    return this.http.get(path,Options);
  }
}
