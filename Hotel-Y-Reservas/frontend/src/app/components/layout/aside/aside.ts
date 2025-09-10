import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
  
}
