import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardProductComponent } from '../components/product/card-product/card-product.component';
import { SellerRowComponent } from '../components/user/seller-row/seller-row.component';
import { ContactRowComponent } from '../components/user/contact-row/contact-row.component';
import { DashboardCardComponent } from '../components/user/dashboard-card/dashboard-card.component';
import { UserCardComponent } from '../components/user/user-card/user-card.component';

@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      FormsModule,
      IonicModule,
    ],
    declarations: [
      CardProductComponent,
      SellerRowComponent,
      UserCardComponent,
      ContactRowComponent,
      DashboardCardComponent,
      
    ],
    exports:[
      CardProductComponent, 
      SellerRowComponent,
      UserCardComponent,
      ContactRowComponent,
      DashboardCardComponent,
    ]
  })
  export class SharedModule { }