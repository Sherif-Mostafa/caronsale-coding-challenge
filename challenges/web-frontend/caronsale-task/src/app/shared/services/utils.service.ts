import { Injectable } from '@angular/core';
import * as sha512 from 'js-sha512';
import { FuelType } from '../enums/fuel-type.enum';
import { TransmissionType } from '../enums/transmission-type.enum';
import { CategoryType } from '../enums/category-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  hashPasswordWithCycles(plainPassword: string, cycles: number = 5) {
    let hash = `${plainPassword}`
    for (let index = 0; index < cycles; index++) {
      hash = sha512.sha512(hash);
    }
    return hash;
  }
  getFuelType(type) {
    let result;
    switch (type) {
      case FuelType.AUTOGAS:
        result = 'AutoGas';
        break;
      case FuelType.DIESEL:
        result = 'Diesel';
        break;
      case FuelType.ELECTRIC:
        result = 'Electric';
        break;
      case FuelType.GASOLINE:
        result = 'Gasoline';
        break;
      case FuelType.HYBRID:
        result = 'Hybrid';
        break;
      case FuelType.OTHER:
        result = 'Other';
        break;
      default:
        result = 'unKnown';
        break;
    }
    return result;
  }
  getTransmissionType(type) {
    let result;
    switch (type) {
      case TransmissionType.AUTOMATIC:
        result = 'Automatic'
        break;
      case TransmissionType.MANUAL:
        result = 'Manual'
        break;
      default:
        result = 'unKnown';
        break;
    }
    return result;
  }
  getCategoryType(type) {
    let result;
    switch (type) {
      case CategoryType.COMPACT:
        result = 'Compact';
        break;
      case CategoryType.COUPE:
        result = 'Coupe';
        break;
      case CategoryType.MULTIVAN:
        result = 'MultiVan';
        break;
      case CategoryType.VAN:
        result = 'Van';
        break;
      case CategoryType.PICK_UP:
        result = 'Pick Up';
        break;
      case CategoryType.ROADSTER_CONVERTIBLE:
        result = 'Roadster Convertible';
        break;
      case CategoryType.SEDAN:
        result = 'Sedan';
        break;
      case CategoryType.STATION:
        result = 'Station';
        break;
      case CategoryType.SUV:
        result = 'SUV';
        break;
      default:
        result = 'unKnown';
        break;
    }
    return result;
  }
}
