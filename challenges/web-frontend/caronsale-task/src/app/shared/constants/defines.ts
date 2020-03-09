export const LOGIN = {
    PASSWORD: 'password',
    META: 'meta'
}

export const JSON_PATHS = {
    USER: {
        JWT: '$.token',
        IsAuthenticated: '$.authenticated',
        UserId: '$.userId',
        InternalUserId: '$.internalUserId',
        InternalUserUUId: '$.internalUserUUID',
        Type: '$.type',
        Privileges: '$.privileges',
    },
    AUCTION: {
        VehicleImageThumbnail1: '$.associatedVehicle.imageUrls.front.url',
        VehicleImageThumbnail2: '$.associatedVehicle.imageUrls.leftSide.url',
        VehicleColor: '$.associatedVehicle.color',
        FuelType: '$.associatedVehicle.fuelType',
        Transmission: '$.associatedVehicle.transmission',
        Registration: '$.associatedVehicle.ez',
        Category: '$.associatedVehicle.category',
        RemainingTime: '$.remainingTimeInSeconds',
        Mileage: '$.associatedVehicle.mileageInKm',
        HighestBid: '$.currentHighestBidValue',
        AmIHighestBidder: '$.amIHighestBidder',
        AuctionId: '$.id',
        CarName: '$.label',
    }
}