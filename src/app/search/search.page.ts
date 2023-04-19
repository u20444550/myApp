import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone : true,
  imports: [IonicModule, CommonModule]
})
export class SearchPage implements OnInit {
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private cart: CartService) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;

      this.filteredRestaurants = restaurants;
    });
  }

  filterRestaurants(event: any) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredRestaurants = this.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchInput) ||
      restaurant.dishType.toLowerCase().includes(searchInput) ||
      restaurant.rating.toString().includes(searchInput) ||
      restaurant.distanceToHome.toString().includes(searchInput) ||
      restaurant.distanceToSchool.toString().includes(searchInput) ||
      restaurant.price.toString().includes(searchInput)
    );
  }

  addToCart(restaurant: Restaurant) {
    const item = {
      restaurant: restaurant,
      quantity: 1,
      totalPrice: restaurant.price
    };
    this.cart.addToCart(item);
  }
}
