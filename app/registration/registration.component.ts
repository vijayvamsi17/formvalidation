import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'registration',
  templateUrl: 'registration.component.html'
})

export class RegistrationComponent {

public form:FormGroup;
public email:AbstractControl;
public password:AbstractControl;
public firstname:AbstractControl;
public lastname:AbstractControl;
public mobile:AbstractControl;

public submitted:boolean = false;


  constructor(fb:FormBuilder) {

    this.form = fb.group({
    	'email': ['', Validators.compose([Validators.required])],
    	'password': ['', Validators.compose([Validators.required])],
    	'firstname': ['', Validators.compose([Validators.required])],
    	'lastname': ['', Validators.compose([Validators.required])],
    	'mobile': ['', Validators.compose([Validators.pattern('[0-9]{10}')])]

    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.firstname = this.form.controls['firstname'];
    this.lastname = this.form.controls['lastname'];
    this.mobile = this.form.controls['mobile'];
  }

    public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
    }
  }
 }
