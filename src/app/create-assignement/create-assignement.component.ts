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
  listePromotion: string[] = ['6659548968ff5435557e2c23', '6659549868ff5435557e2c25'];
  listeTypeArendre: string[] = ['PDF', 'Video'];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder,
    private assignmentService: AssignmentService,
    private router: Router
  ) {
    this.firstFormGroup = this._formBuilder.group({
      titre: ['', Validators.required],
      matiere: ['', Validators.required],
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
    // console.log('First Form Data:', this.firstFormGroup.value);
    // console.log('Second Form Data:', this.secondFormGroup.value);
    const assignementData = {
      titre: this.firstFormGroup.value.titre,
      dateRendu: this.secondFormGroup.value.dateDeRendu,
      id_matiere: this.firstFormGroup.value.matiere,
      //id_matiere: '0',
      id_type_a_rendre: this.secondFormGroup.value.typeFichier,
      Description: this.secondFormGroup.value.description,
      upload_fichier: '', // atao inona moa ty
      email_reminder: this.thirdFormGroup.value.emailReminder,
      id_promotion: this.firstFormGroup.value.classe//,
      //evalue: false
    };
    alert(JSON.stringify(assignementData));
    this.assignmentService
      .addAssignment(assignementData)
      .subscribe((reponse) => {
        console.log(reponse);
        window.location.reload();
        // On navigue pour afficher la liste des assignments
        // en utilisant le router de manière programmatique
      },
        error => {
          console.error('Login error:', error);
          alert(error);
          // this.openSnackBar('Login error', 'Close');
          this.router.navigate(['/create']);

        });
    console.log('Assignement Data:', assignementData);
    // Insérer ici le code pour soumettre les données via une requête POST
  }

}
