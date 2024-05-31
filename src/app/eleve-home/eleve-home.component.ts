import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


import { Assignement } from '../modele/assignement';
import { AssignmentService } from '../services/assignment.service';

@Component({
  selector: 'app-eleve-home',
  standalone: true,
  imports: [MatCardModule, RouterLink,CommonModule],
  templateUrl: './eleve-home.component.html',
  styleUrl: './eleve-home.component.css'
})
export class EleveHomeComponent {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentService
  ) { }
  assignments: Assignement[] = [];

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    // On utilise le service pour récupérer l'assignment avec cet id
    this.assignmentService.getAssignmentByPromotion()
      .subscribe(assignment => {
        this.assignments = assignment;
      });
  }
}
