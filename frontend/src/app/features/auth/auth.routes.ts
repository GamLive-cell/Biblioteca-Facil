import { Routes } from '@angular/router';
import { Login } from './login';
import { Cadastro } from './cadastro';
export const AUTH_ROUTES: Routes = [
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
];
