import { Component } from '@angular/core';
import { ElectricCarService } from './services/electric-car-service';
import { ElectricCar } from './models/ElectricCar';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ElectriccarComponent } from './components/electriccar/electriccar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvisionUI';

electricCars=[];


constructor(private electricCarService: ElectricCarService, private dialog: MatDialog) {

  this.electricCarService.getAllElectricCars().then(data => {
    this.electricCars = data;
  });
 }

/**
 * method to register a new ElectricCar
 */
 addElectricCar(): void {
  const config = new MatDialogConfig();
  config.disableClose = false;
  config.hasBackdrop = true;
  config.autoFocus = true;
  config.hasBackdrop = true;
  config.width = "400px";
  this.dialog.open(ElectriccarComponent,config);
 }
}
