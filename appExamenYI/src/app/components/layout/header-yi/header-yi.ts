import { Component } from '@angular/core';
import { Menu, MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, MenuModule], // Importa los módulos
  templateUrl: './header-yi.html',
  styleUrl: './header-yi.css'
})
export class HeaderYi {
  userMenuItems: MenuItem[] = [
    { label: 'Perfil', icon: 'pi pi-fw pi-user' },
    { label: 'Configuración', icon: 'pi pi-fw pi-cog' },
    { separator: true },
    { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out' }
  ];
}