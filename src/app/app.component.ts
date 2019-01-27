import { Component } from '@angular/core';
import { ElectricCarService } from './services/electric-car-service';
import { ElectricCar } from './models/ElectricCar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvisionUI';

electricCars=[];

constructor(private electricCarService: ElectricCarService) {

  this.electricCarService.getAllElectricCars().then(data => {
    this.electricCars = data;
  });
 }





}
