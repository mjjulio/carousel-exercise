import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOwlComponent } from './carousel-owl.component';

describe('CarouselOwlComponent', () => {
  let component: CarouselOwlComponent;
  let fixture: ComponentFixture<CarouselOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
