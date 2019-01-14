import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	
	registerForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AuthService, private router : Router) { }

  ngOnInit() {
  	this.registerForm = this.fb.group({
  		email: [''],
  		password: ['']
  	})
  }

  onSubmit() {
  	this.as.registerUser(this.registerForm.value)
  		.subscribe ( res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/special'])
      },
  			err => console.log(err)
  		)
  }

}
