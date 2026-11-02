import { Routes } from '@angular/router';
import { LivrosLista } from './livros-lista/livros-lista';
import { LivroForm } from './livro-form/livro-form';
export const LIVROS_ROUTES: Routes = [
  { path: '', component: LivrosLista },
  { path: 'novo', component: LivroForm },
  { path: ':id/editar', component: LivroForm },
];
