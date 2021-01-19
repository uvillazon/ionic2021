import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
interface Componente {
  icono:string ;
  nombre:string ;
  direccion:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
