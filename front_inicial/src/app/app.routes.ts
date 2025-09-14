// src/app/app.routes.ts

import { Routes } from '@angular/router';
// Huéspedes
import { Getall as GetAllGuests } from './components/guest/getall/getall';
import { Create as CreateGuest } from './components/guest/create/create';
import { Update as UpdateGuest } from './components/guest/update/update';
// Habitaciones
import { GetallRoomsComponent } from './components/room/getall/getall';
import { CreateRoomComponent } from './components/room/create/create';
import { UpdateRoomComponent } from './components/room/update/update'; // <-- ASEGÚRATE DE QUE ESTA LÍNEA EXISTA Y SEA CORRECTA

import { GetallComponent as GetAllBookings } from './components/booking/getall/getall';
import { CreateComponent as CreateBooking } from './components/booking/create/create';

import { UpdateComponent as UpdateBooking } from './components/booking/update/update'; // <-- AÑADE ESTA LÍNEA


export const routes: Routes = [
    { path: '', redirectTo: 'guests', pathMatch: 'full' },
    { path: "guests", component: GetAllGuests },
    { path: "guests/new", component: CreateGuest },
    { path: "guests/edit/:id", component: UpdateGuest },
    { path: "rooms", component: GetallRoomsComponent },
    { path: "rooms/new", component: CreateRoomComponent },
    { path: "rooms/edit/:id", component: UpdateRoomComponent }, 
     { path: "bookings", component: GetAllBookings },
    { path: "bookings/new", component: CreateBooking },
    { path: "bookings/new", component: CreateBooking },
    { path: "bookings/edit/:id", component: UpdateBooking },
];