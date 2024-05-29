import { Component } from '@angular/core';
import {
  CdkDragDrop,CdkDrag,CdkDropList,CdkDropListGroup,moveItemInArray,transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Assignement } from '../modele/assignement';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-notation-assignement',
  standalone: true,
  imports: [CommonModule,CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './notation-assignement.component.html',
  styleUrl: './notation-assignement.component.css'
})
export class NotationAssignementComponent {
  assignements: Assignement[] = [
    // Exemple d'assignements
    { _id: '1', titre: 'Math Assignment', dateDeRendu: new Date(), id_matiere: 'Math', id_type_a_rendre: 'PDF', Description: 'Math homework', upload_fichier: '', Email_Reminder: false, id_classe: '1A', evalue: false },
    { _id: '2', titre: 'Science Assignment', dateDeRendu: new Date(), id_matiere: 'Science', id_type_a_rendre: 'Video', Description: 'Science project', upload_fichier: '', Email_Reminder: false, id_classe: '2B', evalue: true }
  ];

  drop(event: CdkDragDrop<Assignement[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const movedItem = event.previousContainer.data[event.previousIndex];
      movedItem.evalue = event.container.id === 'cdk-drop-list-notes';
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  getUnratedAssignments(): Assignement[] {
    return this.assignements.filter(item => !item.evalue);
  }

  getRatedAssignments(): Assignement[] {
    return this.assignements.filter(item => item.evalue);
  }
  
}
