import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import  {GasCar} from '../models/GasCar';
@Injectable({
  providedIn: 'root'
})
export class GasCarService {

root: string="http://localhost:9000";
constructor(private http: HttpClient) { }

async getAllGasCars(){
   let data = await this.http.get<GasCar[]>(this.root+"/gascar").toPromise();
   return data;
}

registerNewGasCar(gasCar:GasCar){
  console.log(gasCar)
  return this.http.post(this.root+"/gascar", JSON.stringify(gasCar),{ observe: 'response', headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
}
}
