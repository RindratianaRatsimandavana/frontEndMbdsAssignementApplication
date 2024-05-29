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
    ['665795e56100947559e9d050', 'Promotion 1'],
    ['665795ee6100947559e9d053', 'Promotion 2']
  ]);

  getCorrespondingPromotion(key: String | undefined): String {
    if (key === undefined) {
      return 'prom'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondancePromotion.get(key) || 'prom';
  }

  private correspondanceMatiere = new Map<String, String>([
    ['665796086100947559e9d056', 'Grails'],     
    ['6657961c6100947559e9d059', 'Web avancé']
  ]);

  getCorrespondingMatiere(key: String | undefined): String {
    console.log("idMatiere "+key)
    if (key === undefined) {
      return 'mat'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondancePromotion.get(key) || 'mat';
   
  }

  private correspondanceEleve = new Map<String, String>([
    ['665796726100947559e9d05d', 'Garcia Manon']
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
