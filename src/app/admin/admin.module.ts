import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavHeaderComponent } from './admin-nav-header/admin-nav-header.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminNavHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
