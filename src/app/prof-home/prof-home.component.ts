import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { BrowserModule } from '@angular/platform-browser';
// import {SlickCarouselModule  } from 'ngx-slick-carousel';
//import { NgxCarouselModule } from 'ngx-carousel';
//import 'hammerjs';
import { RouterLink } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';

@Component({
  selector: 'app-prof-home',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,RouterLink,MatDialogModule],
  templateUrl: './prof-home.component.html',
  styleUrl: './prof-home.component.css'
})
export class ProfHomeComponent {
  id="1";
  // cards = Array(10).fill({
  //   title: 'Shiba Inu',
  //   subtitle: 'Dog Breed',
  //   content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
  //             A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  //             bred for hunting.`,
  //   imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  // });

  // slideConfig = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: true,
  //   infinite: true,
  //   arrows: true
  // };
  constructor(public dialog: MatDialog) {}

  data = {
    typeDonnee: 'assignement',
    id: '0'
  };

  openDialog(valId:string) {
    //id fotsiny no recuperena eto fa any amin'ny dialogue no misy traitement recuperation ana 
    //data dia any no misy if sy else
    this.data.id=valId;
    console.log("l'idTransmis"+this.data.id);
    const dialogRef = this.dialog.open(DialogueComponent, {
      data: this.data
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }



}
