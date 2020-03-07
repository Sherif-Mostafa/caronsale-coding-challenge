import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { UtilsService } from './shared/services/utils.service';
import { HttpClientModule } from '@angular/common/http';


const Modules = [
  BrowserModule,
  HttpClientModule,
  SharedModule
]

const Services=[
  AuthenticationService,
  UtilsService
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ...Modules
  ],
  providers: [...Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
