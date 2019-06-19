import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule, ReactiveFormsModule , ChartsModule, BsDropdownModule, ButtonsModule
  ],
  exports: [
    CoreModule, FormsModule, ReactiveFormsModule , ChartsModule, BsDropdownModule, ButtonsModule,
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class SharedModule { }
