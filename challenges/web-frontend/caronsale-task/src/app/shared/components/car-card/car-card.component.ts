import { Component, OnInit, Input } from '@angular/core';
import { Auction } from '../../models/auction.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() auction: Auction;
  constructor() { }

  ngOnInit(): void {
  }

}
