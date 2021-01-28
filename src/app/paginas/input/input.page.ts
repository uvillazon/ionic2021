import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre:any="";
  usuario = {
    nombre : "",
    email :"",
    password : ""
  };
  constructor() { }

  ngOnInit() {
  }

  logForm(form){
    console.log(this.usuario);
    console.log(form);
  }
}
