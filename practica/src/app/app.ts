import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              console.log('New clicked');
            }
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
              console.log('Search clicked');
            }
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
              console.log('Settings clicked');
            }
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              console.log('Logout clicked');
            }
          }
        ]
      }
    ];
  }
}