import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-gascar',
  templateUrl: './gascar.component.html',
  styleUrls: ['./gascar.component.css']
})
export class GascarComponent {
email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private dialogRef: MatDialogRef<GascarComponent>) { }

 getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
