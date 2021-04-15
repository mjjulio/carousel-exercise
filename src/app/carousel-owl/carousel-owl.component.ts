import { Component, OnInit, ViewChild, ElementRef, Input, Inject } from '@angular/core';
import { OwlOptions, SlidesOutputData  } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-carousel-owl',
  templateUrl: './carousel-owl.component.html',
  styleUrls: ['./carousel-owl.component.scss']
})
export class CarouselOwlComponent implements OnInit {
  owlCar: any
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    center: true,
    items: 5,
    margin: 24,
    startPosition: 2
  }
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  @ViewChild('btnPrevious') btnPrevious: ElementRef;
  @ViewChild('btnNext') btnNext: ElementRef;
  @Input() carouselData: Array<{ [key: string]: any }>;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.carouselData = [
      { label: 'Mobile internet', imgSrc: '' },
      { label: 'Home internet', imgSrc: '' },
      { label: 'Get a device', imgSrc: '' },
      { label: 'Add a phone-line', imgSrc: '' },
      { label: 'Upgrade', imgSrc: '' },
    ]
  }

  ngAfterViewInit(): void {
    this.setCenterItem();
  }

  getPassedData(data: SlidesOutputData): void {
    this.activeSlides = data;
    this.setCenterItem();  
    this.toggleControls(true);
  }

  setCenterItem(): void {
    const el = this.document.querySelector('.owl-item.enlarge')
    if (el) {
      this.document.querySelector('.owl-item.enlarge .carousel-item').classList.remove('selected');
      el.classList.remove('enlarge');
      
    }
    const center = this.document.querySelector('.owl-item.center');
    if (center) {
      center.classList.add('enlarge');
      this.document.querySelector('.owl-item.center .carousel-item').classList.add('selected');
    }
  }

  setControls(): void {
    this.toggleControls(false);
  }

  toggleControls(isAbove: boolean): void {
    if (this.btnPrevious && this.btnNext) {
      if (isAbove) {
        this.btnPrevious.nativeElement.style.zIndex = 10;
        this.btnNext.nativeElement.style.zIndex = 10;
      } else {
        this.btnPrevious.nativeElement.style.zIndex = 0;
        this.btnNext.nativeElement.style.zIndex = 0;
      }
    }
  }

}
