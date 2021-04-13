import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild(NgxGlideComponent, { static: false }) ngxGlide: NgxGlideComponent;

  constructor() { }

  ngOnInit(): void {
  }
 
  play(): void {
    this.ngxGlide.play();
  }

}
