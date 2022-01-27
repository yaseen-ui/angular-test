import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { SellerModule } from './seller/seller.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./customer/customer.module').then(m => CustomerModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => AdminModule) },
  { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => SellerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
