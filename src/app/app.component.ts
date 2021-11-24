import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private service: AppService
    ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addNewFood: boolean = false;
  newFoodName: string = '';
  newFoodCalories: any = '';
  newFoodImage: any;
  foods: any;
  searchValue: string = '';

  showAddNewFood() {
    this.addNewFood = true;
  }

  fetchImageUrl(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ((eve: any) => {
        this.newFoodImage = eve.target.result;
      })
    }
  }

  addFood() {
    this.service.addFood(this.newFoodName, this.newFoodCalories, this.newFoodImage);
  }

  reciveEvent(event: any){
    this.foods = event;
  }

  showSearchValues(){
    this.service.passSearchValue(this.searchValue);
  }
  
}

export interface FoodAddedEventArgs {
  name: string;
  calories: any;
  image: any;
}