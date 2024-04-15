import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { User } from 'src/app/models/user';
import { FieldService } from 'src/app/services/product/field.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-becoming-repartidor',
  templateUrl: './becoming-repartidor.page.html',
  styleUrls: ['./becoming-repartidor.page.scss', '../../presentation/presentation.scss' ],
})
export class BecomingRepartidorPage implements OnInit {

  constructor(
    private router: Router,
    private fieldService: FieldService,
    private userService: UserService,
  ) { }

  fields : Field[] = [];
  searchList : Field[] = [];

  user : User = new User();

  step : number = 1;

  canStock : boolean = false;

  finishedForm : boolean = false;
  

  ngOnInit() {

    this.userService.getUser().subscribe(user => {
      this.user = user as User;

      console.log('New repartidor:', this.user);
    });

    this.fieldService.getFields().subscribe(fields => {
      this.fields = fields;
      console.log('Fields:', fields);

      for (let field of this.fields){

        this.userService.searchUserWithId(field.farmerId).subscribe(user => {
          field.farmer = user as User;
        });
      }

      this.searchList = [... this.fields];
    });
  }


  searchField(event : any){
    let searchInput = event.target.value;

    if (searchInput === ''){
      this.searchList = [ ... this.fields];
      return;
    }

    this.searchList = [... this.fields.filter(field => {
      return field.name.toLowerCase().includes(searchInput.toLowerCase()) 
      || field.farmer!.lastname.toLowerCase().includes(searchInput.toLowerCase())
      || field.farmer!.firstname.toLowerCase().includes(searchInput.toLowerCase()); 
    })];
    
    console.log('Search list : ', this.searchList);
  }

  canGo2(){
    return this.user.fields && this.user.fields.length > 0;
  }

  // goStep2(){
  //   this.step = 'step2';
  // }

  canGo3(){
    return this.canGo2() 
    // && this.user.deliveryAddress !== undefined 
    && this.canStock;
  }


  // goStep3(){
  //   this.step = 'step3';
  // }

  // goStep4(){
  //   this.step = 'step4';
  // }

  nextStep(){
    this.step++;
  }

  return(){
    this.step--;
    this.finishedForm = false;

  }

  validateForm(){
    // this.step = 'step5';goStep5
    this.step = 5;
    this.finishedForm = true;
  }


  goToHome() {
    this.router.navigate(['./tabs/home']);
  }
}
