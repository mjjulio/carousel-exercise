import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData  } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-owl2',
  templateUrl: './carousel-owl2.component.html',
  styleUrls: ['./carousel-owl2.component.scss']
})
export class CarouselOwl2Component implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    dots: false,
    autoWidth: true,
    items: 5,
    nav: true,
    margin: -10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1024: {
        items: 5,
      },
      1280: {
        items: 5,
      },
    },
  };
  carouselData: any;
  
  constructor() { }

  ngOnInit(): void {

    this.carouselData = [
      { label: 'Mobile internet', imgSrc: '' },
      { label: 'Home internet', imgSrc: '' },
      { label: 'Get a device', imgSrc: '' },
      { label: 'Add a phone-line', imgSrc: '' },
      { label: 'Upgrade', imgSrc: '' }
    ];   
  }

}
