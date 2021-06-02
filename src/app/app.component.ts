import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-cart';
  menuArray = [];
  ableToRender = false;
  constructor(private apiservice: ApiServiceService, private dataSerivce: DataService ) {
    this.menuArray = [
      {name: 'Products', urlname: 'product', font: 'th'},
      {name: 'Cart', urlname: 'cart', font: 'shopping-cart'},
      {name: 'Users', urlname: 'user', font: 'user'},
      { name: 'Login', urlname: 'login', font: 'sign-in'}
  ];
  }


  ngOnInit(): void {
    this.apiservice.getAllUserData().subscribe(res => {
      this.dataSerivce.setUserData(res);
      this.ableToRender = true;
    });
  }
}
