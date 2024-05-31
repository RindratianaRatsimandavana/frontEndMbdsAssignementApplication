import { Component } from '@angular/core';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProfService } from '../services/prof.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


//import { NgZone } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  status = true;
  constructor(private fb: FormBuilder,
    private profService: ProfService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Data:', loginData.email);
      console.log('Login Data:', loginData.password);
      const login = {
        email: loginData.email,
        password: loginData.password
      }
      if (this.status) {
        this.profService.loginProf(login).subscribe(
          response => {
            console.log('Login successful:', response);
            if (response.auth) {
              localStorage.setItem('token', response.token);
              //this.router.navigate(['/home']);
              // this.ngZone.run(() => {
              //   this.router.navigate(['/home']);
              // });
              this.router.navigate(['/home']).then(() => {
                window.location.reload();
              });
            }

          },
          error => {
            console.error('Login error:', error);
            this.openSnackBar('Login error', 'Close');
            //alert("")
          }
        );
      }

    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,  // Durée d'affichage du snackbar en ms
    });
  }
}
