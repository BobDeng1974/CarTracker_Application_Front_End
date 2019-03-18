import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ElectriccarComponent } from './components/electriccarForm/electriccar.component';
import { FormsModule } from '@angular/forms';
import { MatDividerModule} from '@angular/material/divider';
import { MaterialModule } from './material.module';
import { GascarComponent } from './components/gascarForm/gascar.component';
import { RouterModule, Routes } from '@angular/router';
import { ElectricCarListComponent } from './components/electric-car-list/electric-car-list.component';

/**
 * list of routes in the application
 */
const routes: Routes = [
{ path: 'electriccarlist', component: ElectricCarListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ElectriccarComponent,
    GascarComponent,
    ElectricCarListComponent
  ],
  imports: [
    RouterModule.forRoot(
      [{ path: 'gascar', component: GascarComponent }]),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    MaterialModule
  ],
  entryComponents: [ElectriccarComponent,GascarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
