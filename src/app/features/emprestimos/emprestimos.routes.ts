
import { Routes } from '@angular/router';
import { EmprestimosLista } from './emprestimos-lista/emprestimos-lista';
import { EmprestimosForm } from './emprestimos-form/emprestimos-form';

export const EMPRESTIMOS_ROUTES: Routes = [
  { path: '', component: EmprestimosLista },
  { path: 'novo', component: EmprestimosForm },
  { path: ':id/editar', component: EmprestimosForm },
];
