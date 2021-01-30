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
    {
      icono: 'albums-outline',
      nombre:'Avatar',
      direccion:'/avatar',
    },
    {
      icono: 'albums-outline',
      nombre:'Cards',
      direccion:'/cards',
    },
    {
      icono: 'albums-outline',
      nombre:'Slides',
      direccion:'/slides',
    },
    {
      icono: 'albums-outline',
      nombre:'Grid',
      direccion:'/grid',
    },
    {
      icono: 'accessibility-outline',
      nombre:'Toast',
      direccion:'/toast',
    }, {
      icono: 'construct',
      nombre:'Popover ',
      direccion:'/popover',
    },
    {
      icono: 'construct',
      nombre:'Input ',
      direccion:'/input',
    },
    {
      icono: 'infinite-outline',
      nombre:'Infinity scrool',
      direccion:'/infinity',
    },
    {
      icono: 'list-circle-outline',
      nombre:'Listas',
      direccion:'/listas',
    },
    {
      icono: 'reorder-four-outline',
      nombre:'List-Reorder',
      direccion:'/list-reorder',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
