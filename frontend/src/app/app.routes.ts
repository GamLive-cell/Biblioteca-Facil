import { Routes } from '@angular/router';
import { USUARIOS_ROUTES } from './features/usuarios/usuarios.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', children: USUARIOS_ROUTES },
  { path: '**', redirectTo: 'usuarios' },
];
