import { Routes } from '@angular/router';
import { EstudianteListYi } from './components/estudiantes/estudiante-list-yi/estudiante-list-yi';
import { EstudianteFormYi } from './components/estudiantes/estudiante-form-yi/estudiante-form-yi';

export const routes: Routes = [
  { path: 'estudiantes', component: EstudianteListYi },
  { path: 'estudiantes/nuevo', component: EstudianteFormYi },
  // Agrega aquí las rutas para Grados y Asignaturas
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' } // Ruta por defecto
];