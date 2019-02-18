import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ElectriccarComponent } from './components/electriccar/electriccar.component';
import { FormsModule } from '@angular/forms';
import { MatDividerModule} from '@angular/material/divider';
import { MaterialModule } from './material.module';
import { GascarComponent } from './components/gascar/gascar.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
{ path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ElectriccarComponent,
    GascarComponent,
    TestComponent
  ],
  imports: [
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
