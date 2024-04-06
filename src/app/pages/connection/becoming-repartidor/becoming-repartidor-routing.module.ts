import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomingRepartidorPage } from './becoming-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: BecomingRepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomingRepartidorPageRoutingModule {}
