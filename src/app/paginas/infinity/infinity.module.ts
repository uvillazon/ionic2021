import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinityPageRoutingModule } from './infinity-routing.module';

import { InfinityPage } from './infinity.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinityPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InfinityPage]
})
export class InfinityPageModule {}
