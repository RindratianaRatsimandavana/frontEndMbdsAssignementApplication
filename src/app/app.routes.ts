import { Routes } from '@angular/router';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { CreateAssignementComponent } from './create-assignement/create-assignement.component'; 
import { LoginComponent } from './login/login.component';
import { NotationAssignementComponent } from './notation-assignement/notation-assignement.component';

export const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: ProfHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notation', component: NotationAssignementComponent },
  { path: 'create', component: CreateAssignementComponent }
];

