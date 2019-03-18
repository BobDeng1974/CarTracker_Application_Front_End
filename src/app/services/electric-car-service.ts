import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import  {ElectricCar} from '../models/ElectricCar';

@Injectable({
  providedIn: 'root'
})
export class ElectricCarService {
private root: string="http://localhost:9000";
  constructor(private http: HttpClient) { }
/**
 * main function to get list of all elelctric cars [[ElectriccarComponent]] form the backend server
 */
async getAllElectricCars(){
   let data = await this.http.get<ElectricCar[]>(this.root+"/electriccar").toPromise();
   return data;
}

registerNewElectricCar(car:ElectricCar){
  console.log(car)
  return this.http.post(this.root+"/electriccar", JSON.stringify(car),{ observe: 'response', headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
}


}
