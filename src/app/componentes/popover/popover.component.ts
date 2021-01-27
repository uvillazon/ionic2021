import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  persoon: any;
  constructor(private popover: PopoverController) {

    console.log(this.popover);
   }

  
  ClosePopover() {
    console.log("componente Close");
    this.popover.dismiss();
  }

  ngOnInit() {}

  
}
