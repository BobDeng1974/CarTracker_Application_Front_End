import { Component } from '@angular/core';
import { GasCarService } from './services/gas-car-service';
import { ElectricCarService } from './services/electric-car-service';
import { ElectricCar } from './models/ElectricCar';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ElectriccarComponent } from './components/electriccar/electriccar.component';
import { GascarComponent } from './components/gascar/gascar.component';
import {MatTableDataSource} from '@angular/material';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

displayedColumns: string[] = ['plate', 'make', 'model', 'year'];






title = 'ProvisionUI';

electricCars :ElectricCar[] = new Array() ;
gasCars=[];




constructor(private electricCarService: ElectricCarService,private gasCarService: GasCarService, private dialog: MatDialog) {

  this.electricCarService.getAllElectricCars().then(data => {
    this.electricCars = data;
  });

   this.gasCarService.getAllGasCars().then(data => {
   this.gasCars = data;
});
 }

applyFilter(filterValue: any) {
    this.electricCars.filter = filterValue.trim().toLowerCase();
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


 /**
  * method to register a new ElectricCar
  */
  addGasCar(): void {
   const config = new MatDialogConfig();
   config.disableClose = false;
   config.hasBackdrop = true;
   config.autoFocus = true;
   config.hasBackdrop = true;
   config.width = "400px";
   this.dialog.open(GascarComponent,config);
  }


}
