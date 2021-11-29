import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
let token = localStorage.getItem('userToken')
if(token){
  request = request.clone({
    headers: request.headers.set('Auth',`Bearer ${token}`)
  })
}
    return next.handle(request);
  }
}
