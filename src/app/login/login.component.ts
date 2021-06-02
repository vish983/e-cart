import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isVisible = false;
  result;
  passResult;
  allUsers;
  authUser;
  msg;
  loginform = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private dataser: DataService) { }

  ngOnInit(): void {
  }
  login = () => {
    const userid = this.loginform.get('userId').value;
    this.result = this.dataser.getUser(userid);
    console.log(this.result);
    if (this.result !== false){
      this.isVisible = true;
    }else
    {
      this.msg = 'Username not exist';
    }
  }
  passcheck = () => {
    const pass = this.loginform.get('password').value;
    this.passResult = this.dataser.getPass( this.loginform.get('userId').value, pass);
    console.log(this.passResult);
    if (this.passResult !== false){
     this.authUser = this.passResult;
     Swal.fire({
       icon: 'success',
       text: 'You are currently logged in with ' + this.authUser.username,
       title: 'Login successfully!'
     });
    } else{
      console.log('Incorrect credentials');
      Swal.fire({
        icon: 'error',
        text: 'You are currently logged in with ' + this.passResult.username,
        title: 'Login unsuccessfull!'
      });
    }
  }
}
