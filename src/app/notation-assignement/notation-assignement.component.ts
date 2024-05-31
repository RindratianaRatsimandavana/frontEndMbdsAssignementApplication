import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,CdkDrag,CdkDropList,CdkDropListGroup,moveItemInArray,transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Assignement } from '../modele/assignement';

import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Contenu } from '../modele/contenu';
//import { RouterLink } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ContenuService } from '../services/contenu.service';



@Component({
  selector: 'app-notation-assignement',
  standalone: true,
  imports: [CommonModule,CdkDropListGroup, CdkDropList, CdkDrag,FormsModule,DialogueComponent,MatDialogModule,RouterLink],
  templateUrl: './notation-assignement.component.html',
  styleUrl: './notation-assignement.component.css'
})
export class NotationAssignementComponent implements OnInit{
  constructor(public dialog: MatDialog,private route:ActivatedRoute,private router:Router,
    private contenutService:ContenuService) {}
  @ViewChild('myModal') modal!: ElementRef;

  contenus: Contenu[] = [];
  
  // contenus: Contenu[] = [
  //   {
  //     _id: '1',
  //     id_assignment: 1,
  //     id_eleve: 1,
  //     reponse: 'Math',
  //     commentaire: '',
  //     note: -1,
  //     dateRendu: new Date('2024-05-27T14:48:00.000Z') // Convert String to Date
  //   },
  //   {
  //     _id: '2',
  //     id_assignment: 2,
  //     id_eleve: 2,
  //     reponse: 'Science',
  //     commentaire: '',
  //     note: 0,
  //     dateRendu: new Date('2024-05-28T14:48:00.000Z') // Convert String to Date
  //   }
  // ];

  private correspondanceEleve = new Map<String, String>([
    ['665796726100947559e9d05d', 'Garcia Manon']
  ]);

  getCorrespondingEleve(key: String | undefined): String {
    if (key === undefined) {
      return 'eleve'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondanceEleve.get(key) || 'eleve';
  }

  noteAttribue = 0;
  idContenuAnoter= '';
  commentaire= '';

  data = {
    typeDonnee: 'contenu',
    id: "0"
  };
  
  ngOnInit() {
    // Recuperation des query params (ce qui suit le ? dans l'url)
    //console.log(this.route.snapshot.queryParams);
    // Recuperation des fragment (ce qui suit le # dans l'url)
    //console.log(this.route.snapshot.fragment);

    // On recupere l'id de l'assignment dans l'URL à l'aide de ActivatedRoute
    const id = this.route.snapshot.params['id'];
    // On utilise le service pour récupérer l'assignment avec cet id
    this.contenutService.getContenuByAssignment(id)
    .subscribe(assignment => {
      this.contenus = assignment;
    });
  }

  loadData()
  {

  }


  openDialog(valId:string) {
    this.data.id=valId;
    console.log("l'idTransmis"+this.data.id);
    const dialogRef = this.dialog.open(DialogueComponent, {
      data: this.data
    });
  }
  

  getContenusSansNote(): Contenu[] {
    return this.contenus.filter(item => item.siNote == false);
  }

  getContenusAvecNote(): Contenu[] {
    return this.contenus.filter(item => item.siNote == true);
  }


  // drop(event: CdkDragDrop<Contenu[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     const movedItem = event.previousContainer.data[event.previousIndex];
  //     //movedItem.evalue = true;
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //     this.openModal(event);
  //   }
  // }

  drop(event: CdkDragDrop<Contenu[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const movedItem = event.previousContainer.data[event.previousIndex];
      if (event.container.id === 'cdk-drop-list-notes') {
        this.idContenuAnoter = movedItem._id!;
        this.openModal(event);
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        // if(this.openModal(event)==0)
        // {
        //   transferArrayItem(event.previousContainer.data,
        //     event.container.data,
        //     event.previousIndex,
        //     event.currentIndex);
        // }
        // else
        // {
        //   alert("notation annulée")
        // }
      }
      
    }
  }
  
  openModal(event: any) {
    //this.noteAttribue = event.item.data._id;
    const modalElement = this.modal.nativeElement as HTMLElement;
    // Modifiez les styles de l'élément modal
    modalElement.style.display = 'flex';
    console.log("idContenu c'est "+this.idContenuAnoter);
    console.log("note c'est "+this.noteAttribue);
    console.log("commentaire c'est "+this.commentaire);
    return 0;
  }

  closeModal() {
    const modalElement = this.modal.nativeElement as HTMLElement;
    modalElement.style.display = 'none';
    this.noteAttribue = -1;
    this.idContenuAnoter = '';
    this.commentaire = '';
  }

  onSubmit() {
    console.log('ID:', this.idContenuAnoter);
    console.log('Note:', this.noteAttribue);
    console.log('Commentaire:', this.commentaire);

    const objet = {
      note:this.noteAttribue, 
      commentaire:this.commentaire
    }
    
    this.contenutService
      .updateNoteContenu(objet,this.idContenuAnoter)
      .subscribe((message) => {
        console.log(message);
        console.log("après update");
        this.refreshContenus();
      });

    // const item = this.contenus.find(c => c._id === this.idContenuAnoter);
    // if (item) {
    //   item.note = this.noteAttribue!;
    // }

    this.closeModal();
  }

  refreshContenus() {
    const id = this.route.snapshot.params['id'];
    this.contenutService.getContenuByAssignment(id)
      .subscribe(assignment => {
        this.contenus = assignment;
      });
  }


  viewDetails() {
    console.log('Show details for ID:', this.idContenuAnoter);
  }

}
