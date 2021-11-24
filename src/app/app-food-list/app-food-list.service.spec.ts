import { TestBed } from '@angular/core/testing';

import { AppFoodListService } from './app-food-list.service';

describe('AppFoodListService', () => {
  let service: AppFoodListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFoodListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
