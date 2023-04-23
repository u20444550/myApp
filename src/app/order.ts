import { CartItem } from "./cartitem";

// order.ts
export interface Order {
    id: number;
    items: CartItem[];
    grandTotal: number;
    date: Date;
  }
  