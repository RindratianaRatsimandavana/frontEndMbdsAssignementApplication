import { Routes } from '@angular/router';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { CreateAssignementComponent } from './create-assignement/create-assignement.component'; 
import { LoginComponent } from './login/login.component';
import { NotationAssignementComponent } from './notation-assignement/notation-assignement.component';
import { SoumissionAssignementComponent } from './soumission-assignement/soumission-assignement.component';
import { AppComponent } from './app.component';

//import { TestUploadComponent } from './testasupp/test-upload.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'home', component: ProfHomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'notation/:id', component: NotationAssignementComponent, canActivate: [authGuard] },
  { path: 'create', component: CreateAssignementComponent, canActivate: [authGuard] },
  { path: 'submit', component: SoumissionAssignementComponent, canActivate: [authGuard] }
  //{ path: 'test', component: TestUploadComponent, canActivate: [authGuard] }

 
];


