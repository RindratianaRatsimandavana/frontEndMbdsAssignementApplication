import { Component, computed, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Router } from '@angular/router';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule ,MatIconModule,MatButtonModule,
    MatSidenavModule,MenuComponent,ProfHomeComponent,MatCardModule,LoginComponent,MatFormFieldModule,MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'assignement_application';
  collapsed = signal(false);
  sidenavwidth = computed(() => this. collapsed() ? '65px' : '250px');


  isConnected = true;
  valeurBarreRecherche='';

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    this.isConnected = !!token; // will be true if token exists, false otherwise
  }

  onSearch(value:any) {
    console.log('onsearch:', value);
    
  }

  deconnexion() {
    localStorage.removeItem('token');
    this.isConnected = false;
    this.router.navigate(['/login']);
  }
}
