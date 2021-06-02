import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  userArrayData = [];
  constructor(private dataservice: DataService) {
    console.log(this.dataservice.userDataArray);
    this.userArrayData = this.dataservice.getUserData();
  }

  ngOnInit(): void {

  }

}
