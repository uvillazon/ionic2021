import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/componentes/popover/popover.component';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  
})
export class PopoverPage implements OnInit {

    persons:any[]=[
    {
      name: 'Titulo POPOVER',
      summary:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },  
    {
      name: 'Titulo POPOVER1',
      summary:'xxxxxxxxxxNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },    
  ]
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
      "person": this.persons[0],
    }
    });
    return await popover.present();
  }
  async presentPopover1(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
      "person": this.persons[1],
    }
    });
    return await popover.present();
  }
}
