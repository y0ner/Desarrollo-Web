import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule],
  templateUrl: './reservations.html',
})
export class ReservationsComponent {
  // Placeholder data. This will come from the backend.
  reservations = [
    { id: 1, guestName: 'Juan Pérez', room: '101', checkIn: '2024-08-01', checkOut: '2024-08-05', status: 'Confirmada' },
    { id: 2, guestName: 'Ana Gómez', room: '203', checkIn: '2024-08-02', checkOut: '2024-08-07', status: 'Pendiente' },
    { id: 3, guestName: 'Carlos Sánchez', room: '305', checkIn: '2024-08-03', checkOut: '2024-08-06', status: 'Cancelada' },
  ];
}