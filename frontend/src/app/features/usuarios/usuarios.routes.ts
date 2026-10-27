import { Routes } from '@angular/router';
import { UsuariosLista } from './usuarios-lista/usuarios-lista';
import { UsuarioForm } from './usuario-form/usuario-form';

export const USUARIOS_ROUTES: Routes = [
  { path: '', component: UsuariosLista },
  { path: 'novo', component: UsuarioForm },
  { path: ':id/editar', component: UsuarioForm },
];
