import { Component, OnInit } from '@angular/core';
items:Array;
@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  hola:string="hjolassadsada";
  items=Array(100);
  constructor() { }

  ngOnInit() {
  }

}
