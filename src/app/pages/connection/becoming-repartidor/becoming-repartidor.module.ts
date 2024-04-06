import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomingRepartidorPageRoutingModule } from './becoming-repartidor-routing.module';

import { BecomingRepartidorPage } from './becoming-repartidor.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecomingRepartidorPageRoutingModule,
    SharedModule
  ],
  declarations: [BecomingRepartidorPage]
})
export class BecomingRepartidorPageModule {}
