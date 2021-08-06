import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentPage } from '../payment/payment.page';
@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss']
})
export class CartPage {
  constructor(public modalController: ModalController) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: PaymentPage, cssClass: 'my-custom-class'
    });
    console.log('modal activateds');
    return await modal.present();
  }
}
