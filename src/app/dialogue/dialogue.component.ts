import { Component, Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogModule,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { AssignmentService } from '../services/assignment.service';
import { Assignement } from '../modele/assignement';
import { EleveService } from '../services/eleve.service';
import { Eleve } from '../modele/eleve';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogModule,MatCardModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent implements OnInit{
  assignement:Assignement | undefined;
  eleve:Eleve | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private assignmentService:AssignmentService,private eleveService:EleveService) {

  }

  ngOnInit(): void {
   this.loadData();
  }

  loadData(){
    console.log("data.typeDonnee",this.data.typeDonnee)
    console.log(".data.id",this.data.id)
    if(this.data.typeDonnee==="assignement")
    {
      console.log("typeDonnee ",this.data.typeDonnee)
      this.assignmentService.getAssignmentById(this.data.id)
      .subscribe(assignment => {
        this.assignement = assignment;
        console.log("this.assignement",this.assignement)
      });
    }
    else 
    {
      console.log("typeDonnee ",this.data.typeDonnee)
      this.eleveService.getEleveById(this.data.id)
      .subscribe(resultat => {
        this.eleve = resultat;
        console.log("this.eleve",this.eleve)
      });
    }
    
  }

  
  
}
