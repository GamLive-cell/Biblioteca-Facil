import { Routes } from '@angular/router';
import { USUARIOS_ROUTES } from './features/usuarios/usuarios.routes';
import { LIVROS_ROUTES } from './features/livros/livros.routes';
import { AUTH_ROUTES } from './features/auth/auth.routes';
import { DEVOLUCOES_ROUTES } from './features/devolucoes/devolucoes.routes';

export const routes: Routes = [
  ...AUTH_ROUTES,
  { path: '', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'livros', children: LIVROS_ROUTES },
  { path: 'usuarios', children: USUARIOS_ROUTES },
  { path: 'devolucoes', children: DEVOLUCOES_ROUTES },
  { path: '**', redirectTo: 'livros' },
];