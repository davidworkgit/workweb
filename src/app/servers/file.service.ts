import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  configUrl = 'assets/filepath.json';
  constructor(private http: HttpClient) { 
  }

  getFiles(){
    return this.http.get(this.configUrl);
  }
}
