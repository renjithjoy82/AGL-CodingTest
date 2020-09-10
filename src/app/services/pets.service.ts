import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pets } from './Pets';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ArrayType } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
 
  constructor(private http: HttpClient) { }

  public getCatsInfo = () => {
    return this.http.get(environment.apiURL)
      .map(this.getPetDetails).toPromise();
  }

  public getPetDetails = (masters) => {
    let arrData: Pets[] = [];

    masters.forEach(function (master, idx) {
      const tempListObj: Pets = {
        gender: master.gender,
        pets: master.pets
      };
      const genderIdx = arrData.findIndex((p) => p.gender === master.gender);
      if (genderIdx > -1) {
        if(master.pets == null)
          arrData[genderIdx].pets.push(...[]);
        else
          arrData[genderIdx].pets.push(...master.pets);
      } else {
        arrData.push(tempListObj);
      }
    });
    return arrData;
  }

}
