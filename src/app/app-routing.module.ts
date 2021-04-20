import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselTinySliderComponent } from './carousel-tiny-slider/carousel-tiny-slider.component';
import { HomeComponent } from './home/home.component';
import { CarouselOwl2Component } from './carousel-owl2/carousel-owl2.component';

const routes: Routes = [
  { path: 'glidejs', component: CarouselComponent },
  { path: 'tinyslider', component: CarouselTinySliderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'owl2', component: CarouselOwl2Component },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
