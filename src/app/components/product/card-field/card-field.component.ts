import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card-field',
  templateUrl: './card-field.component.html',
  styleUrls: ['./card-field.component.scss'],
})
export class CardFieldComponent  implements OnInit {

  @Input() field : Field = new Field();

  constructor(private router : Router) { }

  ngOnInit() {}

  goToProductPage(){
    // console.log('go to product page');
    // this.router.navigate(['product/' + this.product.uid]);
  }
}
