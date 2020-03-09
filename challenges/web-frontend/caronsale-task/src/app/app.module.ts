import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { UtilsService } from './shared/services/utils.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuctionsService } from './shared/services/auctions.service';
import { HttpCustomInterceptor } from './shared/interceptors/http.interceptor';
import { AppService } from './app.service';


const Modules = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  SharedModule,
]

const Services = [
  AppService,
  AuthenticationService,
  UtilsService,
  AuctionsService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCustomInterceptor, multi: true
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...Modules
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
