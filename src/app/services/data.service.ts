import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDataArray = [];
  topFiveUserData = [];
  constructor() {
  }

  getUserData = () => {
    return this.userDataArray;
  }

  setUserData = (data) => {
    this.userDataArray = data;

  }
  setLimitedUser = (i) => {
    this.topFiveUserData = i;

  }
  getLimitedUserData = () => {
    return this.topFiveUserData;
  }

  getUser = (userid) => {
    const foundUser = this.userDataArray.find(user => user.username === userid);
    if (foundUser) {
      return {username: foundUser.username,
              firstname: foundUser.name.firstname,
              lastname: foundUser.name.lastname,
              email: foundUser.email };
    } else {
      return false;

    }
  }
  getPass = (userid, pass) => {
    const passFound = this.userDataArray.find( upass => upass.password === pass && upass.username === userid);
    if (passFound){
      return passFound;
    }else{
      return false;
    }
  }

}
