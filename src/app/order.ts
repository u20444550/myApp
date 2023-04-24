import { CartItem } from "./cartitem";

// order.ts
export class Order {
  id: number;
  items: CartItem[];
  grandTotal: number;
  description: string;
  date: Date;

  constructor(
    id: number = Date.now(),
    items: CartItem[] = [],
    grandTotal: number = 0,
    description: string = 'Standard',
    date: Date = new Date()
  ) {
    this.id = id;
    this.items = items;
    this.grandTotal = grandTotal;
    this.description = description;
    this.date = date;
  }
}

  
  