import { Component, OnInit } from '@angular/core';
import { ElectricCarService } from 'src/app/services/electric-car-service';
import { NgForm } from '@angular/forms';
import { ElectricCar } from 'src/app/models/ElectricCar';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-electriccar',
  templateUrl: './electriccar.component.html',
  styleUrls: ['./electriccar.component.css']
})
export class ElectriccarComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ElectriccarComponent>,private electricCarService: ElectricCarService) { }

  ngOnInit() {
  }

/**
 * method to create a new ElectricCar instance
 * @param car 
 */
registerNewElectricCar(car:ElectricCar){
  console.log(car);
  console.log("from ts");
  this.electricCarService.registerNewElectricCar(car).subscribe(
    response =>{
      if(response.status==200){

      }
    },
    error =>{
      console.log("error");
    }
  );
}

/**
 * close the modal for creating a new ELectricCar
 */
closeDialog(){
  this.dialogRef.close();
}

}
