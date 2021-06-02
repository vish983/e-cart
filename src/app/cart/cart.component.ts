import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private userDataService: DataService) {
    this.userCartArray = this.userDataService.getLimitedUserData();
  }

  userCartArray = [];


  ngOnInit(): void {
    // const myArray = [
    //   {name: 'Vishal', age: 23, height: '1.2m', vehicle: 'Motorcycle', price: 100},
    //   {name: 'Viki', age: 24, height: '1.1m', vehicle: 'None' , price: 200},
    //   {name: 'Abhi', age: 25, height: '1.5m', vehicle: 'Scotty', price: 150},
    //   {name: 'Abc', age: 27, height: '1.7m', vehicle: 'Car', price: 300},
    //   {name: 'Def', age: 24, height: '1.1m', vehicle: 'Bus', price: 170}
    // ];
    // const newArray = myArray
    //   .filter(a => a.price < 300);
    // console.log(newArray.map(item => item.name));
    const myArray = [
      {name: 'Vishal', age: 23, height: '1.2m', vehicle: 'Motorcycle', price: 100},
      {name: 'Viki', age: 24, height: '1.1m', vehicle: 'None' , price: 200},
      {name: 'Abhi', age: 25, height: '1.5m', vehicle: 'Scotty', price: 150},
      {name: 'Abc', age: 27, height: '1.7m', vehicle: 'Car', price: 300},
      {name: 'Abhi2', age: 24, height: '1.1m', vehicle: 'Bus', price: 170}
    ];
  //   const newArray = myArray
  //     .filter(a => a.price < 300);
  //   console.log(newArray.map(item => item.name));
  //
  // const numArray = [2, 4, 5, 6, 7];
  // const newNumArray = numArray.map(v => {
  //   const obj = { age: v, name: 'arvi' + v}
  //   return obj;
  // });
    // const newArray = myArray.map( v => {
    //   if (v.name === 'Abhi') {
    //     v.age = 50;
    //   }
    //   return v;
    // });

    // console.log(newArray);
    const newArray =  myArray.unshift({name: 'vish' , age: 19 , height: '1.5m', vehicle: 'BMW' , price: 900 });


    console.log(newArray);
    console.log(myArray);

 }
}
