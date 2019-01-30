import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { GasCar } from 'src/app/models/GasCar';
import { GasCarService } from 'src/app/services/gas-car-service';

@Component({
  selector: 'app-gascar',
  templateUrl: './gascar.component.html',
  styleUrls: ['./gascar.component.css']
})
export class GascarComponent {

email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private dialogRef: MatDialogRef<GascarComponent>, private gasCarService: GasCarService) { }

 getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


/**
 * method to create a new ElectricCar instance
 * @param car
 */
registerNewGasCar(gasCar:GasCar){
  console.log(gasCar);
  console.log("from ts");
  this.gasCarService.registerNewGasCar(gasCar).subscribe(
    response =>{
      if(response.status==200){

          //this.closeDialog();
      }
    },
    error =>{
      console.log("error");
    }
  );
}




}
