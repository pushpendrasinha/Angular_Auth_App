import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	registerUrl="http://localhost:3000/api/register";
	loginUrl="http://localhost:3000/api/login";

  constructor(private http: HttpClient, private router : Router) { }

  registerUser(user) {
  	return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
  	return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token' );
  }

  loggedOut(){
    return localStorage.removeItem('token'),
    this.router.navigate(['/events'])
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
