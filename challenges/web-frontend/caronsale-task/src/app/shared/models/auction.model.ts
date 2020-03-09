import { Observable } from 'rxjs';

export class Auction {
    AuctionId: string;
    CarName: string;
    VehicleImageThumbnail1: string;
    VehicleImageThumbnail2: string;
    VehicleColor: string;
    FuelType: string;
    Transmission: string;
    Registration: string;
    Category: string;
    Mileage: string;
    HighestBid: number;
    RemainingTime: Observable<any>;
    AmIHighestBidder: boolean;
}