import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  currentCatagory: string;
  productArray;
  constructor(private activatedroutes: ActivatedRoute, private apiservice: ApiServiceService) { }

  ngOnInit(): void {
    this.activatedroutes.params.subscribe(res => {
      this.currentCatagory = res.category;

      // call the api
      this.apiservice.getItemsByCategory(this.currentCatagory).subscribe(response => {
        this.productArray = response;
      });
    });
  }

}
