import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { NgxGlideModule } from 'ngx-glide';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselTinySliderComponent } from './carousel-tiny-slider/carousel-tiny-slider.component';

import { CarouselOwlComponent } from './carousel-owl/carousel-owl.component';
import { CarouselOwl2Component } from './carousel-owl2/carousel-owl2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    CarouselTinySliderComponent,
    CarouselOwlComponent,
    CarouselOwl2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGlideModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
