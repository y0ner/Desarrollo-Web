import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside-yi', // <--- CORRECTED SELECTOR
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside-yi.html',
  styleUrls: ['./aside-yi.css']
})
export class AsideYi implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Estudiantes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/estudiantes'
      },
      {
        label: 'Grados',
        icon: 'pi pi-fw pi-server',
        routerLink: '/grados',
      },
      {
        label: 'Asignaturas',
        icon: 'pi pi-fw pi-book',
        routerLink: '/asignaturas'
      }
    ];
  }
}