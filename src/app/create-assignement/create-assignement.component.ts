import { Component } from '@angular/core';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignmentService } from '../services/assignment.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-create-assignement',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCheckboxModule,
    CommonModule, MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './create-assignement.component.html',
  styleUrl: './create-assignement.component.css'
})
export class CreateAssignementComponent {

  
  idMatiere: string | null = localStorage.getItem('id_matiere');
  listePromotion: string[] = ['promotion_1', 'promotion_2'];
  listeTypeArendre: string[] = ['PDF', 'Video'];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup; 

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
    if (key === undefined) {
      return 'mat'; // Ou une valeur appropriée pour les cas undefined
    }
    return this.correspondancePromotion.get(key) || 'mat';
   
  }

  isLinear = true;

  constructor(private _formBuilder: FormBuilder,
    private assignmentService: AssignmentService,
    private router: Router
  ) {
    this.firstFormGroup = this._formBuilder.group({
      titre: ['', Validators.required],
      //matiere: ['', Validators.required],
      classe: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      dateDeRendu: ['', Validators.required],
      typeFichier: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      emailReminder: [false],
      confirmation: ['']
    });

  }
  submitForms() {
    const assignementData = {
      titre: this.firstFormGroup.value.titre,
      dateRendu: this.secondFormGroup.value.dateDeRendu,
      id_matiere: this.firstFormGroup.value.matiere,
      id_type_a_rendre: this.secondFormGroup.value.typeFichier,
      Description: this.secondFormGroup.value.description,
      upload_fichier: '',
      email_reminder: this.thirdFormGroup.value.emailReminder,
      id_promotion: this.firstFormGroup.value.classe
    };
    this.assignmentService
      .addAssignment(assignementData)
      .subscribe((reponse) => {
        console.log(reponse);
        window.location.reload();
      },
        error => {
          this.router.navigate(['/create']);

        });
    console.log('Assignement Data:', assignementData);
    
  }

}
