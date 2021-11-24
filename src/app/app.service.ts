import { Injectable, EventEmitter } from '@angular/core';
import { FoodAddedEventArgs } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  $isFoodAdded = new EventEmitter();
  food: FoodAddedEventArgs = {
    name: '',
    calories: '',
    image: ''
  };
  $searchValue = new EventEmitter();

  constructor() { }

   addFood(name: any, calories: any, image: any){
     this.food.name = name;
     this.food.calories = calories;
     this.food.image = image;
     this.$isFoodAdded.emit(this.food);
   }

   passSearchValue(value: any) {
     console.log(value);
     this.$searchValue.emit(value);
   }

}
