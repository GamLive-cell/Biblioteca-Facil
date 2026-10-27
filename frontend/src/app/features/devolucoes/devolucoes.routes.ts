import { Routes } from '@angular/router';
import { DevolucoesLista } from './devolucoes-lista/devolucoes-lista';
import { DevolucoesForm } from './devolucoes-form/devolucoes-form';

export const DEVOLUCOES_ROUTES: Routes = [
  { path: '', component: DevolucoesLista },
  { path: 'novo', component: DevolucoesForm },
];