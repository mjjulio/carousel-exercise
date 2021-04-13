import { Component, OnInit } from '@angular/core';
declare let tns: any;

@Component({
  selector: 'app-carousel-tiny-slider',
  templateUrl: './carousel-tiny-slider.component.html',
  styleUrls: ['./carousel-tiny-slider.component.scss']
})
export class CarouselTinySliderComponent implements OnInit {
  slider: any;

  constructor() { }

  ngOnInit(): void {
    this.slider = tns({
      container: '.my-slider',
      items: 5,
      slideBy: 1,
      startIndex: 2,
      mode: 'carousel',
      gutter: 24,
      center: true,
      centerSlideCount: 1,
      mouseDrag: true,
      autoWidth: true,
    });
    this.slider.events.on("transitionEnd", (info: any) => {
      info.slideItems[info.indexCached].classList.remove(
        "center-item"
      );
      info.slideItems[info.index].classList.add(
        "center-item"
      );
    });
  }

}
