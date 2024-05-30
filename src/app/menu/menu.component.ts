import { Component, Input, WritableSignal, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

export type Menultem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule,RouterLink,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  //transfert de l'etat de collapse orincipal dans ce menu sidenav
  sideNavcollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sideNavcollapsed.set(val);
  }






 

}
