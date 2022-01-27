import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { CustomerNavHeaderComponent } from './customer-nav-header/customer-nav-header.component';
import { CommonComponentsModule } from './../common-components/common-components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerHomepageComponent,
    CustomerNavHeaderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CommonComponentsModule,
    FormsModule
  ]
})
export class CustomerModule { }
