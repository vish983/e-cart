import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryArray;

  constructor(private category: ApiServiceService) { }

  ngOnInit(): void {
    this.category.getAllcategory().subscribe(category =>{
      this.categoryArray = category;
    })
 
  }

}
