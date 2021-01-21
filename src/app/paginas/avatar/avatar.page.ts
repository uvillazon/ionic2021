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
  repetir = Array(100);
  avatar:Avatar[]=[
    {
      icono: 'assets/img/imagen1.jpg',
      nombre:'Naruto1'
    },
    {
      icono: 'assets/img/imagen2.jpg',
      nombre:'Naruto2'
    },
    {
      icono: 'assets/img/imagen3.jpg',
      nombre:'Naruto3'
    },
    {
      icono: 'assets/img/imagen4.jpg',
      nombre:'Naruto4'
    },
    {
      icono: 'assets/img/imagen5.jpg',
      nombre:'Naruto5'
    },
    {
      icono: 'assets/img/imagen4.jpg',
      nombre:'Naruto4'
    },
    {
      icono: 'assets/img/imagen3.jpg',
      nombre:'Naruto3'
    },
    {
      icono: 'assets/img/imagen2.jpg',
      nombre:'Naruto2'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
