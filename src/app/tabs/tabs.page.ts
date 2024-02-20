import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private route : ActivatedRoute,
  ) {}


  routePath : string = '';

  ngOnInit() {
    this.route.url.subscribe((res : any) => {
      
      this.routePath = res[0].path;
      console.log(this.routePath)
    });
  }


}
