import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { BrowserModule } from '@angular/platform-browser';
// import {SlickCarouselModule  } from 'ngx-slick-carousel';
//import { NgxCarouselModule } from 'ngx-carousel';
//import 'hammerjs';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { AssignmentService } from '../services/assignment.service';
import { Assignement } from '../modele/assignement';

@Component({
  selector: 'app-prof-home',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,RouterLink,MatDialogModule],
  templateUrl: './prof-home.component.html',
  styleUrl: './prof-home.component.css'
})
export class ProfHomeComponent {
  assignments: Assignement[] = [];
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
  //constructor(public dialog: MatDialog, private route:ActivatedRoute,private router:Router) {}

  
  constructor(public dialog: MatDialog,private route:ActivatedRoute,private router:Router,
    private assignmentService:AssignmentService
  ){ }

  private correspondancePromotion = new Map<string, string>([
    ['6659548968ff5435557e2c23', 'prom_1'],
    ['6659549868ff5435557e2c25', 'prom_2']
  ]);

  getCorrespondingPromotion(key: string): string {
    return this.correspondancePromotion.get(key) || 'Promotion';
  }


  data = {
    typeDonnee: 'assignement',
    id: '0'
  };


  ngOnInit() {
    // Recuperation des query params (ce qui suit le ? dans l'url)
    //console.log(this.route.snapshot.queryParams);
    // Recuperation des fragment (ce qui suit le # dans l'url)
    //console.log(this.route.snapshot.fragment);

    // On recupere l'id de l'assignment dans l'URL à l'aide de ActivatedRoute
    const id = this.route.snapshot.params['id'];
    // On utilise le service pour récupérer l'assignment avec cet id
    this.assignmentService.getAssignmentByProf()
    .subscribe(assignment => {
      this.assignments = assignment;
    });
  }

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
