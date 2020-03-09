import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../shared/services/auctions.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public auctionService: AuctionsService, private appService: AppService) { }

  ngOnInit(): void {
    this.loadAuctions();
    setInterval(() => { this.loadAuctions() }, 20000)
  }

  loadAuctions() {
    this.auctionService.getlatestAuctions().subscribe(res => {
      this.appService.showLoader = false;
    }, error => {
      this.appService.showLoader = false;
    })
  }
}
