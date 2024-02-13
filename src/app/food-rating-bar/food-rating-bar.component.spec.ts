import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRatingBarComponent } from './food-rating-bar.component';

describe('FoodRatingBarComponent', () => {
  let component: FoodRatingBarComponent;
  let fixture: ComponentFixture<FoodRatingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodRatingBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodRatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
