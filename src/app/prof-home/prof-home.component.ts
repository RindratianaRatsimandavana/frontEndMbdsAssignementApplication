import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { BrowserModule } from '@angular/platform-browser';
// import {SlickCarouselModule  } from 'ngx-slick-carousel';
//import { NgxCarouselModule } from 'ngx-carousel';
//import 'hammerjs';





@Component({
  selector: 'app-prof-home',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './prof-home.component.html',
  styleUrl: './prof-home.component.css'
})
export class ProfHomeComponent {
  cards = Array(10).fill({
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
              bred for hunting.`,
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  });

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true
  };

}
