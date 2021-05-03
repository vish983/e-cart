import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuArray = [];


  constructor() { }

  ngOnInit(): void {
    this.menuArray=[
      {name:'Products',urlname:'product',font:'th'},
      {name:'Cart', urlname:'category',font:'shopping-cart'},
  ]
  }

}
