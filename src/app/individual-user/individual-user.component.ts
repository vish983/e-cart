import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit, ɵCompiler_compileModuleAsync__POST_R3__ } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormControlName, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.css']
})
export class IndividualUserComponent implements OnInit {
  userID: string;
  userData: any;
  isEditAble = false;
 userEdit: FormGroup;



  constructor( private activeId: ActivatedRoute,
               private idService: ApiServiceService,
               public diref: MatDialogRef<IndividualUserComponent>, @Inject(MAT_DIALOG_DATA) incomingData: any,
                 ) {
                   this.userData = incomingData;
                   this.userEdit = new FormGroup({
                    firstname: new FormControl(this.userData.name.firstname, Validators.required),
                    lastname: new FormControl(this.userData.name.lastname, Validators.required),
                    email: new FormControl(this.userData.email, Validators.required),
                    phone: new FormControl(this.userData.phone, Validators.required),
                    loginId: new FormControl(this.userData.id, Validators.required),
                    password: new FormControl(this.userData.password, Validators.required),
                    city: new FormControl(this.userData.address.city, Validators.required),
                    street: new FormControl(this.userData.address.street, Validators.required),
                    number: new FormControl(this.userData.address.number, Validators.required),
                    zipcode: new FormControl(this.userData.address.zipcode, Validators.required),
                    latitude: new FormControl(this.userData.address.geolocation.lat, Validators.required),
                    longitude: new FormControl(this.userData.address.geolocation.long, Validators.required),

                  });
                 }
  ngOnInit(): void {
    this.activeId.params.subscribe(res => {
      this.userID = res.user;
    });
    // this.userEdit.valueChanges.subscribe(data => {
    //   console.log(data);
    // });
  }
  editData = () => {
    this.isEditAble = true;
  }
  saveData = () => {
    const temp = {
      name: {
        firstname: this.userEdit.get('firstname').value,
        lastname: this.userEdit.get('lastname').value,
      },
      email: this.userEdit.get('email').value,
      phone: this.userEdit.get('phone').value,
      loginId: this.userEdit.get('loginId').value,
      password: this.userEdit.get('password').value,
      address: {
        city: this.userEdit.get('city').value,
        street: this.userEdit.get('street').value,
        number: this.userEdit.get('number').value,
        zipcode: this.userEdit.get('zipcode').value,
        latitude: this.userEdit.get('latitude').value,
        longitude: this.userEdit.get('longitude').value,
      }
    };
    this.diref.close(temp);
  }

}
