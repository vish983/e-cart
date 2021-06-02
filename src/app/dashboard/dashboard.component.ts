import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productArray;

  constructor(private apiservice: ApiServiceService) { }

  ngOnInit(): void {
   this.apiservice.getAllProductsData().subscribe(res => {
     console.log(res)
     this.productArray = res;
   });

  }

}
