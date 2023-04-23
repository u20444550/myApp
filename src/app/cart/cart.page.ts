import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { CartItem } from '../cartitem';
import { AlertController } from '@ionic/angular';
import { Order } from '../order';
import { OrderHistoryService } from '../services/orderhistory.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CartPage implements OnInit {
  cartItems: CartItem[] = [];
  grandTotal: number = 0;



  constructor(
    private cartService: CartService,
    private alertController: AlertController,
    private orderHistoryService: OrderHistoryService

  ) { }

  ngOnInit() {
    this.initializeCart();
  }

  ionViewWillEnter() {
    this.initializeCart();
  }

  initializeCart() {
    this.cartItems = this.cartService.getItems();
    this.updateGrandTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    this.initializeCart();
    this.grandTotal = 0;
    this.cartService.clearGrandTotal();

  }

  updateGrandTotal() {
    this.grandTotal = this.cartService.getGrandTotal();
  }


  async makePayment() {
    const alert = await this.alertController.create({
      header: 'Payment',
      message: `Your payment of ${this.grandTotal + 2} $ has been made`,
      buttons: ['OK']
    });

    await alert.present();
    const newOrder: Order = {
      id: Date.now(),
      items: this.cartItems,
      grandTotal: this.grandTotal +2,
      date: new Date(),
    };
    this.orderHistoryService.addToOrderHistory(newOrder);
    this.clearCart();
  }




}
