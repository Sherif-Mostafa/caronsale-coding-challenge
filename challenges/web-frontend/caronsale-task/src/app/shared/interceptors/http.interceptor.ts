import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CONFIG } from '../constants/pages-config';

@Injectable()
export class HttpCustomInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.currentUser && this.auth.currentUser.JWT && !request.url.toString().includes(CONFIG.LOGIN.route)) {
      const authReq = request.clone({ setHeaders: { authtoken: this.auth.currentUser.JWT, userid: this.auth.currentUser.UserId, 'Content-Type': 'application/json' } });
      return next.handle(authReq);
    }
    return next.handle(request);

  }
}
