import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { FieldService } from 'src/app/services/product/field.service';

@Component({
  selector: 'app-becoming-repartidor',
  templateUrl: './becoming-repartidor.page.html',
  styleUrls: ['./becoming-repartidor.page.scss', '../../presentation/presentation.scss' ],
})
export class BecomingRepartidorPage implements OnInit {

  constructor(
    private router: Router,
    private fieldService: FieldService
  ) { }

  fields : Field[] = [];

  ngOnInit() {

    this.fieldService.getFields().subscribe(fields => {
      this.fields = fields;
      console.log('Fields:', fields);
    });
  }

  goToHome() {
    this.router.navigate(['./tabs/home']);
  }
}
