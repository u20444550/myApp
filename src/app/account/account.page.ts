// account.page.ts

import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderHistoryService } from '../services/orderhistory.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { EditAccountComponent } from '../edit-account/edit-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccountPage implements OnInit {
  orderHistory: Order[] = [];
  accountDetails: any;

  constructor(
    private orderHistoryService: OrderHistoryService,
    private cartService: CartService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.orderHistory = this.orderHistoryService.getOrderHistory();
    this.accountDetails = JSON.parse(localStorage.getItem('accountDetails') || '{}');
  }

  reorder(order: Order) {
    order.items.forEach(item => {
      this.cartService.addToCart(item);
    });
    this.router.navigate(['/cart']);
  }

  async openHelpModal() {
    const helpModal = await this.modalController.create({
      component: HelpModalComponent
    });
    return await helpModal.present();
  }

  async openEditForm() {
    const editFormModal = await this.modalController.create({
      component: EditAccountComponent // Add EditAccountComponent here
    });
    return await editFormModal.present();
  }
}
