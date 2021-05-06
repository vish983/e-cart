import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-cart';
  menuArray;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.menuArray = [
      {name: 'Products', urlname: 'product', font: 'th'},
      {name: 'Cart', urlname: 'cart', font: 'shopping-cart'},
  ];
  }
}
