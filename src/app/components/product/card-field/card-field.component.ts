import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-card-field',
  templateUrl: './card-field.component.html',
  styleUrls: ['./card-field.component.scss'],
})
export class CardFieldComponent  implements OnInit {

  @Input() field : Field = new Field();

  @Input() farmer : User = new User();

  @Input() cardType : string = 'selection';

  @Input() repartidor : User = new User();

  // selected : boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  selectedField(){
    return this.repartidor.fields !== undefined && this.repartidor.fields.includes(this.field.uid);
  }

  selectField(){

    if (this.repartidor.fields === undefined){
      this.repartidor.fields = [];
    }

    if (!this.selectedField()){
      this.repartidor.fields.push(this.field.uid);
    }
    else{
      this.repartidor.fields = this.repartidor.fields.filter(field => field !== this.field.uid);
    }
  }

  goToProductPage(){
    // console.log('go to product page');
    // this.router.navigate(['product/' + this.product.uid]);
  }

  goToAddField(){
    // this.router.navigate(['product/add-field']);
  }
}
