import { EventEmitter, Injectable } from '@angular/core';
import { QuantityAdded } from './app-food-list.component';

@Injectable({
  providedIn: 'root'
})
export class AppFoodListService {
  $isQuantityPassed = new EventEmitter();
  quantityAdd: QuantityAdded = {
    name: '',
    quantity: '',
  }

  constructor() { }

  passQuantiy(name: any, quantity: any){
    this.quantityAdd.name = name;
    this.quantityAdd.quantity = quantity;
  }
}