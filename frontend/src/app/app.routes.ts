
import { Routes } from '@angular/router';
import { UsuariosLista } from './features/usuarios/usuarios-lista/usuarios-lista';
import { UsuarioForm } from './features/usuarios/usuario-form/usuario-form';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosLista },
  { path: 'usuarios/novo', component: UsuarioForm },
];

