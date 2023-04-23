// order-history.service.ts
import { Injectable } from '@angular/core';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  orderHistory: Order[] = [];

  constructor() { }

  addToOrderHistory(order: Order) {
    this.orderHistory.push(order);
  }

  getOrderHistory() {
    return this.orderHistory;
  }
}
