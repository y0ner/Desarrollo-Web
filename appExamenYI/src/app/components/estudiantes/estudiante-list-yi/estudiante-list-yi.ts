import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for pipes
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-estudiante-list-yi',
  standalone: true,
  imports: [
    CommonModule, // For CurrencyPipe
    RouterLink,
    ButtonModule,
    TableModule,
    TagModule,
    MenuModule
  ],
  templateUrl: './estudiante-list-yi.html',
  styleUrls: ['./estudiante-list-yi.css']
})
export class EstudianteListYi implements OnInit {
  // Declare properties for the template
  products: any[] = [];
  items: MenuItem[] = [];

  ngOnInit() {
    // Sample data to make the template work
    this.products = [
      { name: 'Macbook Pro 15"', inventoryStatus: 'Available', category: 'Laptops', price: 2999.00 },
      { name: 'Macbook Pro 13"', inventoryStatus: 'In Review', category: 'Laptops', price: 2999.00 },
      { name: 'iPhone 13 Mini', inventoryStatus: 'Sold Out', category: 'Phones', price: 2999.00 },
    ];

    this.items = [
        { label: 'Ver', icon: 'pi pi-fw pi-eye' },
        { label: 'Editar', icon: 'pi pi-fw pi-pencil' },
        { separator: true },
        { label: 'Eliminar', icon: 'pi pi-fw pi-trash' }
    ];
  }
}