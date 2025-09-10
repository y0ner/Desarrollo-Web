import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-estudiante-form-yi',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    ButtonModule
  ],
  templateUrl: './estudiante-form-yi.html',
  styleUrls: ['./estudiante-form-yi.css']
})
export class EstudianteFormYi implements OnInit {
  // Declare the 'cities' property
  cities: any[] = [];

  ngOnInit() {
    // Sample data for the dropdown
    this.cities = [
      { name: 'Active', code: 'ACT' },
      { name: 'Inactive', code: 'INA' }
    ];
  }
}