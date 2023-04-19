import { Injectable } from '@angular/core';
import { CartItem } from '../cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  grandTotal: number = 0;

  constructor() { }

  addToCart(item: CartItem) {

    const existingItem = this.items.find(i => i.restaurant.id === item.restaurant.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.restaurant.price;

    } else {
      this.items.push(item);
    }
    this.grandTotal += item.restaurant.price;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.clearGrandTotal();
    return this.items;
  }



  getGrandTotal() {
    return this.grandTotal;
  }

  clearGrandTotal() {
    this.grandTotal = 0;
  }
}
