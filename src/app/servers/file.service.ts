import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  constructor(private http: HttpClient) { 
  }

  getFiles(path: any,type?: String){
    if (type == null){
      return this.http.get(path);
    }
    return this.http.get(path,{responseType:'text'});
  }
}
