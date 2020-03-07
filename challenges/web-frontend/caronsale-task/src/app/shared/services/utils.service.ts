import { Injectable } from '@angular/core';
import * as sha512 from 'js-sha512';

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
}
