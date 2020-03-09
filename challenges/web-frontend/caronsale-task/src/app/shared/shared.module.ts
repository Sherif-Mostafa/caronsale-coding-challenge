import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './components/car-card/car-card.component';



@NgModule({
  declarations: [CarCardComponent],
  exports: [CarCardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
