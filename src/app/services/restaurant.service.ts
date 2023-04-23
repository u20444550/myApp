import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() {
    if (!localStorage.getItem('restaurants')) {
      const restaurants: Restaurant[] = [
        {
          id: 1,
          name: 'Burger King',
          dishType: 'Fast Food',
          rating: 4,
          distanceToHome: 2.5,
          distanceToSchool: 3.0,
          price: 5.5,
          topdish : 'Quad stacker',
          image: 'assets/images/burgerking.png', 
        },
        {
          id: 2,
          name: "Craw daddy's",
          dishType: 'Seafood',
          rating: 4.5,
          distanceToHome: 6.2,
          distanceToSchool: 7.0,
          price: 20,
          topdish : 'Sea platter',
          image: 'assets/images/crawdad.png', 
        },
        {
          id: 3,
          name: 'Kota Joe',
          dishType: 'Fast Food',
          rating: 3.8,
          distanceToHome: 3,
          distanceToSchool: 1.5,
          price: 7,
          topdish : 'Footlong',
          image: 'assets/images/kotajoe.png', 
        },
        {
          id: 4,
          name: 'Spur',
          dishType: 'Steakhouse',
          rating: 4.2,
          distanceToHome: 4.5,
          distanceToSchool: 4,
          price: 15,
          topdish: 'Pepper steak',
          image: 'assets/images/spur.jpg', 
        }
      ];
      localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }
  }

  getRestaurants(): Observable<Restaurant[]> {
    let restaurants: Restaurant[] = [];
    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }
    return of(restaurants);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    let restaurants: Restaurant[] = [];

    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }

    const restaurant: Restaurant | undefined = restaurants.find(restaurant => restaurant.id === id);

    return of(restaurant!);
  }

  async deleteRestaurant(id: number): Promise<void> {
    let restaurants: Restaurant[] = [];

    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }

    const restaurant = restaurants.find(restaurant => restaurant.id === id);

    if (restaurant) {
      const index = restaurants.indexOf(restaurant);
      restaurants.splice(index, 1);
      await localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }
  }
}
