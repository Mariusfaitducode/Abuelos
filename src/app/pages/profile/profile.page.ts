import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { Role, User } from 'src/app/models/user';
import { FieldService } from 'src/app/services/product/field.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private authService : AuthService,
    private userService : UserService,
    private fieldService : FieldService,
    ) {}

  user : User | null = null;

  userFields : Field[] = [];


  ngOnInit(){

    this.userService.getUser().subscribe(user => {
      this.user = user;

      // Retrouve les champs lié à l'utilisateur (Farmer || Repartidor)
      if (this.user && this.user.role !== Role.user){

        this.fieldService.getFields().subscribe(fields => {

          this.userFields = [];

          for (let fieldId of this.user!.fields){
            
            let field = fields.find(f => f.uid === fieldId);

            if (field){
              this.userFields.push(field);
            }
          }

          console.log('User fields found:', this.userFields)

        });

      }
    });

    // this.route.queryParams.subscribe(params =>{
    //   console.log(this.user);
    // })
  }

  goToOrders(){
    this.router.navigate(['/profile/orders']);
  }

  goToSettings(){
    this.router.navigate(['/profile/settings']);
  }

  disconnect(){
    this.user = new User();
    this.authService.disconnect();
    this.router.navigate(['/log-in']);
  }

  goToAddProduct(){
    this.router.navigate(['product/add-product']);
  }

  goToAddField(){
    this.router.navigate(['product/add-field']);
  }

}
