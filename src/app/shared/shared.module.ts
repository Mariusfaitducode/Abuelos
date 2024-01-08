import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardProductComponent } from '../components/product/card-product/card-product.component';
import { SellerRowComponent } from '../components/user/seller-row/seller-row.component';

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
      
    ],
    exports:[
      CardProductComponent, 
      SellerRowComponent,
    ]
  })
  export class SharedModule { }