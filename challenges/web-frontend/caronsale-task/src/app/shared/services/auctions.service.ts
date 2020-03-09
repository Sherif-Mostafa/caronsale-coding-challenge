import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../models/auction.model';
import { API_URLS } from '../constants/routes-config';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import * as JsonQuery from 'jsonpath';
import { JSON_PATHS } from '../constants/defines';
import { FuelType } from '../enums/fuel-type.enum';
import { UtilsService } from './utils.service';
import { timer } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  auctions: Auction[];
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private utils: UtilsService
  ) {
    this.auctions = new Array<Auction>();
  }

  getlatestAuctions() {

    const url = API_URLS.AUCTION.ALL.replace('{userMailId}', this.authService.currentUser.UserId);
    return this.http.get(url).pipe(map((response: Array<any>) => {
      this.auctions = new Array<Auction>();

      response.forEach(item => {
        let auction = new Auction();

        auction.AuctionId = JsonQuery.value(item, JSON_PATHS.AUCTION.AuctionId) || null;
        auction.CarName = JsonQuery.value(item, JSON_PATHS.AUCTION.CarName) || null;
        auction.VehicleImageThumbnail1 = JsonQuery.value(item, JSON_PATHS.AUCTION.VehicleImageThumbnail1) || null;
        auction.VehicleImageThumbnail2 = JsonQuery.value(item, JSON_PATHS.AUCTION.VehicleImageThumbnail2) || null;
        auction.VehicleColor = JsonQuery.value(item, JSON_PATHS.AUCTION.VehicleColor) || null;

        auction.FuelType = this.utils.getFuelType(JsonQuery.value(item, JSON_PATHS.AUCTION.FuelType));
        auction.Transmission = this.utils.getTransmissionType(JsonQuery.value(item, JSON_PATHS.AUCTION.Transmission));
        auction.Category = this.utils.getCategoryType(JsonQuery.value(item, JSON_PATHS.AUCTION.Category));

        auction.Mileage = JsonQuery.value(item, JSON_PATHS.AUCTION.Mileage) || null;
        auction.HighestBid = JsonQuery.value(item, JSON_PATHS.AUCTION.HighestBid) || 0;
        let remainingTime = JsonQuery.value(item, JSON_PATHS.AUCTION.RemainingTime) || null;
        remainingTime = new Date(new Date().setSeconds(remainingTime));
        auction.RemainingTime = timer(0, 1000).pipe(
          map(() => {
            const now = moment();
            const endingTime = moment(remainingTime);
            const duration = moment.duration(endingTime.diff(now));
            const timeLeft = `${duration.days()} days ${duration.hours()}:${duration.minutes()}:${duration.seconds()}`;
            return timeLeft;
          })
        );

        auction.Registration = JsonQuery.value(item, JSON_PATHS.AUCTION.Registration) || null;
        auction.AmIHighestBidder = JsonQuery.value(item, JSON_PATHS.AUCTION.AmIHighestBidder) || false;
        this.auctions.push(auction);
      });
    }), catchError(error => {
      return error;
    }))
  }
}
