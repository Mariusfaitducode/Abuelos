import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasketPage } from './basket.page';
// import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { BasketPageRoutingModule } from './basket-routing.module';
import { CardProductComponent } from 'src/app/components/product/card-product/card-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BasketPageRoutingModule,

    SharedModule
  ],
  declarations: [BasketPage]
})
export class BasketPageModule {}
