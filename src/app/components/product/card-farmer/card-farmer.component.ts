import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card-farmer',
  templateUrl: './card-farmer.component.html',
  styleUrls: ['./card-farmer.component.scss'],
})
export class CardFarmerComponent  implements OnInit {

  @Input() product : Product = new Product();

  constructor(private router : Router) { }

  ngOnInit() {}

  goToProductPage(){
    // console.log('go to product page');
    this.router.navigate(['product/' + this.product.uid]);
  }
}
