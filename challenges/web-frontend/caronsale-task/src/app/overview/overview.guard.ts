import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/services/authentication.service';
import { CONFIG } from '../shared/constants/pages-config';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewGuard implements CanActivate {
  constructor(private auth: AuthenticationService,private router:Router, private appService: AppService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.currentUser && this.auth.currentUser.JWT && (this.auth.currentUser.Privileges.includes('{SALESMAN_USER}') || this.auth.currentUser.Privileges.includes('{BUYER_USER}') ))
    {
      return true;
    } else if(this.auth.currentUser && this.auth.currentUser.JWT && !(this.auth.currentUser.Privileges.includes('{SALESMAN_USER}') || this.auth.currentUser.Privileges.includes('{BUYER_USER}') )){
      this.appService.error = "UnAuthorized User";
    }
    this.appService.showLoader = false;

    this.router.navigate([CONFIG.LOGIN.route]);
    return false;
  }

}
