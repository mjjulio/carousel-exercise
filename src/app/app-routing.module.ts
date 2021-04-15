import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselTinySliderComponent } from './carousel-tiny-slider/carousel-tiny-slider.component';
import { CarouselOwlComponent } from './carousel-owl/carousel-owl.component';

const routes: Routes = [
  { path: 'glidejs', component: CarouselComponent },
  { path: 'tinyslider', component: CarouselTinySliderComponent },
  { path: 'home', component: CarouselOwlComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
