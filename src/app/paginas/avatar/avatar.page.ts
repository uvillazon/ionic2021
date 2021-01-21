import { Component, OnInit } from '@angular/core';

interface Componente {
  icono:string ;
  nombre:string ;
  direccion:string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  
  avatar:Componente[]=[
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
   
  ]

  constructor() { }

  ngOnInit() {
  }

}
