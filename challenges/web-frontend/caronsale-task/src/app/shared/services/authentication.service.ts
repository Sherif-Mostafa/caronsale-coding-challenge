import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../constants/routes-config';
import { LOGIN, JSON_PATHS } from '../constants/defines';
import { map, catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';
import { User } from '../models/user.model';
import * as JsonQuery from 'jsonpath';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: User;
  constructor(
    private http: HttpClient,
    private utils: UtilsService) {
    this.currentUser = new User();
  }

  Login(mail: string, password: string): Observable<any> {
    const url = API_URLS.AUTHENTICATION.LOGIN.replace('{userMailId}', mail);
    const body = {};
    body[LOGIN.PASSWORD] = this.utils.hashPasswordWithCycles(password);
    body[LOGIN.META] = btoa(password);

    return this.http.put(url, body).pipe(map(response => {
      this.currentUser.JWT = JsonQuery.value(response, JSON_PATHS.USER.JWT) || null;
      this.currentUser.IsAuthenticated = JsonQuery.value(response, JSON_PATHS.USER.IsAuthenticated) || false;
      this.currentUser.UserId = JsonQuery.value(response, JSON_PATHS.USER.UserId) || null;
      this.currentUser.InternalUserId = JsonQuery.value(response, JSON_PATHS.USER.InternalUserId) || null;
      this.currentUser.InternalUserUUId = JsonQuery.value(response, JSON_PATHS.USER.InternalUserUUId) || null;
      let privileges = JsonQuery.value(response, JSON_PATHS.USER.Privileges) || null;
      if (privileges) {
        this.currentUser.Privileges = privileges.split('~');
      }
      return response;
    })
    );
  }
}
