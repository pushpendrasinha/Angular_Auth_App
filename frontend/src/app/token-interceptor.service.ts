import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req, next){
  	let tokenizedReq = req.clone ({
  		setHeaders: {
  			Authorization: 'Bearer ${auth.getToken()}'
  		}
  	})
  		return next.handle(tokenizedReq)
  	  }

}