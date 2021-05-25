import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-cart';
  menuArray = [];
  constructor () {
    this.menuArray = [
      {name: 'Products', urlname: 'product', font: 'th'},
      {name: 'Cart', urlname: 'cart', font: 'shopping-cart'},
      {name: 'Users', urlname: 'user', font: 'user'},
  ];
  }

  ngOnInit(): void {
    
  }
}
