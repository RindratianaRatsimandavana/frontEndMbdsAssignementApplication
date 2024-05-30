import { Component } from '@angular/core';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule,FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-soumission-assignement',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,MatSelectModule,CommonModule],
  templateUrl: './soumission-assignement.component.html',
  styleUrl: './soumission-assignement.component.css'
})
export class SoumissionAssignementComponent {
  formGroup: FormGroup;
  assignements = [{id:"1",nom:"A1"},{id:"2",nom:"A2"}];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      assignement: [''], // Champ pour la liste déroulante
      fileInput: [''] // Champ pour le fichier uploadé
    });
  }

  onSubmit() {
    // Soumettre le formulaire
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Traiter le fichier sélectionné
  }
}
