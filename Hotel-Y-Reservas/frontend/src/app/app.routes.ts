import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard').then(m => m.DashboardComponent)
    },
    {
        path: 'reservations',
        loadComponent: () => import('./reservations').then(m => m.ReservationsComponent)
    }
];
