import { Component } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private productService : ProductServiceService) {}

  
}
