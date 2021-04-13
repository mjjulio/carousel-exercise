import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTinySliderComponent } from './carousel-tiny-slider.component';

describe('CarouselTinySliderComponent', () => {
  let component: CarouselTinySliderComponent;
  let fixture: ComponentFixture<CarouselTinySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTinySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTinySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
