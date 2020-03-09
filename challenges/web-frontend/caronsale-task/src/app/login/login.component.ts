import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { AuctionsService } from '../shared/services/auctions.service';
import { Router } from '@angular/router';
import { CONFIG } from '../shared/constants/pages-config';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthenticationService,
    private auction: AuctionsService, private router: Router,
    private formBuilder: FormBuilder,
    public appService: AppService
  ) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  submitLogin($event) {
    event.preventDefault();
    this.appService.showLoader = true;
    this.authService.Login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
      this.router.navigate([CONFIG.OVERVIEW.route])
    }, error => {
      this.appService.showLoader = false;
      this.appService.error = error.error.message;
    })

  }

}
