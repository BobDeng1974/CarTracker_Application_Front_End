import{NgModule}from'@angular/core';
import {
MatListModule,
MatFormFieldModule,
MatInputModule,
MatRippleModule
}from '@angular/material';
import {
MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule
}from '@angular/material';
import {MatGridListModule}from '@angular/material/grid-list';
import {MatTabsModule}from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';


@NgModule({

imports: [
MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatListModule,
MatGridListModule,
MatTabsModule,
FormsModule,
ReactiveFormsModule,
MatInputModule
],
exports: [
MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatListModule,
MatGridListModule,
MatTabsModule,
FormsModule,
ReactiveFormsModule,
MatInputModule
]
})
export class MaterialModule {

}
