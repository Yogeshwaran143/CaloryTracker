import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { AppFoodListService } from './app-food-list.service';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {

  constructor(
    private foodadding: AppService,
    private search: AppService
    ) { }

  @Input() data!: string;
  @Output() event = new EventEmitter<string>();

  foods: any = [];
  FoodQuantity: any;
  normalArray: any;

  ngOnInit(): void {
    
    this.foods = [
      {
        name: 'Apple',
        calories: '95',
        image: './../../assets/apple.jpg',
        quantity: 0
      },
      {
        name: 'Orange',
        calories: '45',
        image: './../../assets/orange.jpg',
        quantity: 0
      },
      {
        name: 'Apple',
        calories: '95',
        image: './../../assets/apple.jpg',
        quantity: 0
      },
      {
        name: 'Orange',
        calories: '45',
        image: './../../assets/orange.jpg',
        quantity: 0
      },
    ];

    this.foodadding.$isFoodAdded.subscribe((data: any) => {
      data.quantity = 0;
      this.foods.push(data)
    });
    this.event.emit(this.foods);
    this.search.$searchValue.subscribe((data) => {
      this.filterFoodList(data);
    });
    this.normalArray = this.foods;
  }

  addToTodayFood(id: number) {
    this.foods[id].quantity = this.FoodQuantity;
    this.event.emit(this.foods);
    this.FoodQuantity = '';
  }

  filterFoodList(searchedValue: any) {
    
    if(searchedValue === '') {
      this.foods = this.normalArray;
    } else {
      
      console.log(searchedValue, "searchedValue");
      let filtered: any = [];
      filtered = this.foods.filter((each: any) => {
        return each.name.toLowerCase().includes(searchedValue);
      });
      console.log(filtered);
      this.foods = filtered;
    }
  }
  
}

export interface QuantityAdded {
  name: string;
  quantity: any;
}