import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private htt:HttpClient) { }

  getUsuarios(){
    return this.htt.get('https://jsonplaceholder.typicode.com/users');
  }
}
