import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
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
    MatTabsModule
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
    MatTabsModule
  ]
})
export class MaterialModule {}
