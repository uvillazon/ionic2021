import { Component, OnInit } from '@angular/core';

interface Sliders {
  image:string ;
  title:string ;
  descripcion:string;
}

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
slideOpts = {
    initialSlide: 1,
    speed: 100
  };

  slider:Sliders[]=[
    {
      image: 'assets/img/slide-1.png',
      title:'Slide1',
      descripcion:'Slide11111111111111111111',
    },
    {
      image: 'assets/img/slide-2.png',
      title:'Slide2',
      descripcion:'Slide11111111111111111111',
    },

  {
      image: 'assets/img/slide-3.png',
      title:'Slide3',
      descripcion:'Slide11111111111111111111',
    },
    {
      image: 'assets/img/slide-4.png',
      title:'Slide4',
      descripcion:'Slide11111111111111111111',
    },
   
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
