import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  CdkDragDrop,CdkDrag,CdkDropList,CdkDropListGroup,moveItemInArray,transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Assignement } from '../modele/assignement';

import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Contenu } from '../modele/contenu';


@Component({
  selector: 'app-notation-assignement',
  standalone: true,
  imports: [CommonModule,CdkDropListGroup, CdkDropList, CdkDrag,FormsModule],
  templateUrl: './notation-assignement.component.html',
  styleUrl: './notation-assignement.component.css'
})
export class NotationAssignementComponent {
  @ViewChild('myModal') modal!: ElementRef;
  

  contenus: Contenu[] = [
    { _id: '1', id_assignement: 'Math', id_eleve: 'John', reponse: 'Math', Commentaire: '', note: -1 },
    { _id: '2', id_assignement: 'Science', id_eleve: 'Oli', reponse: 'Science', Commentaire: '', note: 0 }
  ];

  noteAttribue = -1;
  idContenuAnoter= '';

  getContenusSansNote(): Contenu[] {
    return this.contenus.filter(item => item.note === -1);
  }

  getContenusAvecNote(): Contenu[] {
    return this.contenus.filter(item => item.note !== -1);
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
    return 0;
  }

  closeModal() {
    const modalElement = this.modal.nativeElement as HTMLElement;
    modalElement.style.display = 'none';
    this.noteAttribue = -1;
    this.idContenuAnoter = '';
  }

  onSubmit() {
    console.log('ID:', this.idContenuAnoter);
    console.log('Note:', this.noteAttribue);

    const item = this.contenus.find(c => c._id === this.idContenuAnoter);
    if (item) {
      item.note = this.noteAttribue!;
    }

    this.closeModal();
  }

  viewDetails() {
    console.log('Show details for ID:', this.idContenuAnoter);
  }

}
