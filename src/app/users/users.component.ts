import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndividualUserComponent } from '../individual-user/individual-user.component';
import { ApiServiceService } from '../services/api-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersArray;
  userData;
  constructor(private users: ApiServiceService, private router: Router , public dialog: MatDialog, private dataservice: DataService) { }

  // individualUser = (id => {
  //   this.router.navigate(['/user', id]);
  // });

  // individualUser = (user) => {
  //   this.router.navigate(['/user', user.id]);

  // }
  individualUser = (user, index) => {
    const myDialog = this.dialog.open(IndividualUserComponent,
      {
        data: user,
        maxWidth: '50vw'
      });

    myDialog.afterClosed().subscribe((res) => {
      if (res) {
        this.usersArray[index] = res;
      }
    });
  }

  ngOnInit(): void {
    this.users.getAllUserData().subscribe( responce => {
      console.log(responce);
      this.usersArray = responce;
    });
  }

  navigateToProduct = () => {
    this.dataservice.setUserData(this.usersArray);
    this.router.navigate(['/product']);
  }
  addToCart = () => {
    this.dataservice.setLimitedUser(this.usersArray.slice(0, 4));
    this.router.navigate(['/cart']);
  }
  

}
