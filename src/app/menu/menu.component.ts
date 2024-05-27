import { Component, Input, WritableSignal, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export type Menultem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = signal<Menultem[]>([
    {
      icon: 'analytics',
      label: 'analytics',
      route:'analytics'
    },
    {
      icon: 'analytics',
      label: 'analytics',
      route:'analytics'
    }
  ]);

  // @Input() collapsed: boolean = false;
  @Input() collapsed: WritableSignal<boolean> | undefined;

  getProfilePicSize(): string {
    return this.collapsed ? '32' : '100';
  }
  // sideNavCollapsed = signal(false);
  // @Input() set collapsed(val: boolean)(
  //   this.sideNavCollapsed.set(val);
  // )
  // profilePicSize = computed(() => this. sideNavCollapsed() ? '32' : '100');

}
