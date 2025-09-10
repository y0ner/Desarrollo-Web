import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/dashboard'
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/reservations'
      },
      {
        label: 'Habitaciones',
        icon: 'pi pi-fw pi-key',
      },
      {
        label: 'Huéspedes',
        icon: 'pi pi-fw pi-users',
      }

    ];
    }
}
