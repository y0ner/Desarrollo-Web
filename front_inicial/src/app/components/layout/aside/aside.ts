// src/app/components/layout/aside/aside.ts

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
  encapsulation: ViewEncapsulation.None
})
export class Aside implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/dashboard',
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/bookings',
      },
      {
        label: 'Huéspedes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/guests',
      },
      {
        label: 'Habitaciones',
        icon: 'pi pi-fw pi-home',
        routerLink: '/rooms',
      },
      {
        label: 'Facturación',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: '/billing',
      },
      {
        label: 'Servicios',
        icon: 'pi pi-fw pi-concierge-bell',
        routerLink: '/services',
      },
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: '/reports',
      },
      {
        label: 'Configuración',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/settings',
      },
    ];
  }
}