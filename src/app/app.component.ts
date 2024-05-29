import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import { ProfHomeComponent } from './prof-home/prof-home.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule ,MatIconModule,MatButtonModule,
    MatSidenavModule,MenuComponent,ProfHomeComponent,MatCardModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignement_application';
  collapsed = signal(false);
  sidenavwidth = computed(() => this. collapsed() ? '65px' : '250px');

  isConnected = true;
}
