import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPage } from './cart.page';
import { PaymentPage } from '../payment/payment.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('../payment/payment.module').then(m => m.PaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPageRoutingModule {}
