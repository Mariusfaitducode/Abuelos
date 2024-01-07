import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardProductComponent } from '../components/product/card-product/card-product.component';

@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      FormsModule,
      IonicModule,
    ],
    declarations: [
      CardProductComponent,
      
    ],
    exports:[
      CardProductComponent, 
     
    ]
  })
  export class SharedModule { }