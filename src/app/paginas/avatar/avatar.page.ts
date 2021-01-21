import { Component, OnInit } from '@angular/core';

interface Avatar {
  icono:string ;
  nombre:string ;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  
  avatar:Avatar[]=[
    {
      icono: 'imagen1',
      nombre:'Action Sheet1'
    },
    {
      icono: 'pricetag-outline',
      nombre:'Alert1',
    },
    {
      icono: 'planet-outline',
      nombre:'Fab1'
    },  
  ]

  constructor() { }

  ngOnInit() {
  }

}
