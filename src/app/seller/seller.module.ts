import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SellerNavHeaderComponent } from './seller-nav-header/seller-nav-header.component';


@NgModule({
  declarations: [
    SellerComponent,
    SellerNavHeaderComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
