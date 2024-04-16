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

  // selection / show
  @Input() cardType : string = 'selection';

  // repartidor / product / farmer
  @Input() cardObject : string = 'repartidor';

  @Input() repartidor : User = new User();

  @Input() product : Product = new Product();

  // selected : boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  selectedField(){

    if (this.cardObject === 'product'){
      return this.product.field !== undefined && this.product.field === this.field.uid;

    }
    else if (this.cardObject === 'repartidor'){
      return this.repartidor.fields !== undefined && this.repartidor.fields.includes(this.field.uid);

    }
    return false
  }

  selectField(){

    if (this.cardObject === 'product'){

      this.product.field = this.field.uid;
      console.log('Product field:', this.product.field);

    }
    else if (this.cardObject === 'repartidor'){


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
  }

  goToProductPage(){
    // console.log('go to product page');
    // this.router.navigate(['product/' + this.product.uid]);
  }

  goToAddField(){
    // this.router.navigate(['product/add-field']);
  }
}
