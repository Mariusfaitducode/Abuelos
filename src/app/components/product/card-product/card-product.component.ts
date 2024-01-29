import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent  implements OnInit {

  @Input() product : any = {};

  constructor(private router : Router) { }

  ngOnInit() {}

  goToProductPage(){
    // console.log('go to product page');
    this.router.navigate(['tabs/product']);
  }

}
