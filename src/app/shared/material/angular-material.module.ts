import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
