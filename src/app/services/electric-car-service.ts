import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import  {ElectricCar} from '../models/ElectricCar';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ElectricCarService {
root: String="http://localhost:9000";
  constructor(private http: HttpClient) { }

async getAllElectricCars(){
   let data = await this.http.get<ElectricCar[]>(this.root+"/electriccar").toPromise();
   return data;
}


}
