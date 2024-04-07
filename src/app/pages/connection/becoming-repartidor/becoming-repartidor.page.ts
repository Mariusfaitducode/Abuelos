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

  ngOnInit() {

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


  nextStep(){
    
  }


  goToHome() {
    this.router.navigate(['./tabs/home']);
  }
}
