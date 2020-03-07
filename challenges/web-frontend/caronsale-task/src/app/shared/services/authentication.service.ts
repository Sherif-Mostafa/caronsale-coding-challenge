import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../constants/routes-config';
import { LOGIN } from '../constants/defines';
import { map, catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService) { }

  Login(mail: string, password: string) {
    const url = API_URLS.AUTHENTICATION.LOGIN.replace('{userMailId}', mail);
    const body = {};
    body[LOGIN.PASSWORD] = this.utils.hashPasswordWithCycles(password);
    body[LOGIN.META] = btoa(password);

    this.http.put(url, body).pipe(map(response => {

    }), catchError(err => {
      return err;
    }));
  }
}
