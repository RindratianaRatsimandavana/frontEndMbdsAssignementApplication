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

  private correspondancePromotion = new Map<String, String>([
    ['6659548968ff5435557e2c23', 'prom_1'],
    ['6659549868ff5435557e2c25', 'prom_2']
  ]);

  getCorrespondingPromotion(key: String | undefined): String {
    if (key === undefined) {
      return 'prom'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondancePromotion.get(key) || 'prom';
  }

  private correspondanceMatiere = new Map<String, String>([
    ['6659570ebdc14694fe1c0ea0', 'Web avance'],
    ['66595728bdc14694fe1c0ea2', 'Grails']
  ]);

  getCorrespondingMatiere(key: String | undefined): String {
    if (key === undefined) {
      return 'mat'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondancePromotion.get(key) || 'mat';
   
  }

  private correspondanceEleve = new Map<String, String>([
    ['665955acbdc14694fe1c0e97', 'Pascal Bruno'],
    ['66595602bdc14694fe1c0e99', 'Patrick Murielle'],
    ['6659565abdc14694fe1c0e9b', 'Erica Salazar '],
    ['6659569dbdc14694fe1c0e9d', 'Fernando Rodriguez']
  ]);

  getCorrespondingEleve(key: String | undefined): String {
    if (key === undefined) {
      return 'prom'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondanceEleve.get(key) || 'prom';
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
