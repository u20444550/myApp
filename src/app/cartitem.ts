export class CartItem {
    restaurant: {
      id: number,
      name: string,
      dishType: string,
      rating: number,
      distanceToHome: number,
      distanceToSchool: number,
      price: number,
      topdish: string,
      image: string
    };
    quantity: number;
    totalPrice: number;
  
    constructor(restaurant: any) {
      this.restaurant = restaurant;
      this.quantity = 1;
      this.totalPrice = restaurant.price;
    }
  }
  