import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
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
  imports: [MatButtonModule,MatCardModule,RouterLink,MatDialogModule,CommonModule],
  templateUrl: './prof-home.component.html',
  styleUrl: './prof-home.component.css'
})
export class ProfHomeComponent {
  assignments: Assignement[] = [];
  
  constructor(public dialog: MatDialog,private route:ActivatedRoute,private router:Router,
    private assignmentService:AssignmentService
  ){ }

  private correspondancePromotion = new Map<String, String>([
    ['665795e56100947559e9d050', 'Promotion 1'],
    ['665795ee6100947559e9d053', 'Promotion 2']
  ]);

  getCorrespondingPromotion(key: String | undefined): String {
    if (key === undefined) {
      return 'prom'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondancePromotion.get(key) || 'prom';
  }

  data = {
    typeDonnee: 'assignement',
    id: '0'
  };


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.assignmentService.getAssignmentByProf()
    .subscribe(assignment => {
      this.assignments = assignment;
    });
  }

  openDialog(valId:string) {
    this.data.id=valId;
    console.log("l'idTransmis"+this.data.id);
    const dialogRef = this.dialog.open(DialogueComponent, {
      data: this.data
    });
  }



}
