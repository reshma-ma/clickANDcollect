import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/image/foods/food-1.jpg',
      '/assets/image/foods/food-2.jpg',
      '/assets/image/foods/food-3.jpg',
      '/assets/image/foods/food-4.jpg',
      '/assets/image/foods/food-5.jpg',
      '/assets/image/foods/food-6.jpg',
      'src\assets\food-1.jpg'

    ]
  }
}
