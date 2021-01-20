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

  componente:Componente[]=[
    {
      icono: 'person-outline',
      nombre:'Action Sheet1',
      direccion:'/action-sheet',
    },
    {
      icono: 'pricetag-outline',
      nombre:'Alert1',
      direccion:'/alert',
    },
    {
      icono: 'planet-outline',
      nombre:'Fab1',
      direccion:'/fab',
    },
    {
      icono: 'rocket-outline',
      nombre:'Date Time1',
      direccion:'/datetime',
    },
    {
      icono: 'albums-outline',
      nombre:'Botones1',
      direccion:'/buttons',
    },
   
  ]

  constructor() { }

  ngOnInit() {
  }

}
