import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Devolucao } from '../devolucao.model';
import { DevolucoesMock } from '../devolucoes-mock';

@Component({
  selector: 'app-devolucoes-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './devolucoes-form.html',
  styleUrl: './devolucoes-form.css',
})
export class DevolucoesForm {
  emprestimoId = '';
  tituloLivro = '';
  nomeUsuario = '';
  dataDevolucao = new Date(
  Date.now() - new Date().getTimezoneOffset() * 60000
).toISOString().slice(0, 10);
  observacao = '';
  erro = '';

  constructor(
    private devolucoesMock: DevolucoesMock,
    private router: Router
  ) {}

  salvar(): void {
    if (
      !this.emprestimoId.trim() ||
      !this.tituloLivro.trim() ||
      !this.nomeUsuario.trim() ||
      !this.dataDevolucao
    ) {
      this.erro = 'Preencha todos os campos obrigatórios.';
      return;
    }

    const novaDevolucao: Devolucao = {
      _id: Date.now().toString(),
      emprestimoId: this.emprestimoId.trim(),
      tituloLivro: this.tituloLivro.trim(),
      nomeUsuario: this.nomeUsuario.trim(),
      dataDevolucao: this.dataDevolucao,
      observacao: this.observacao.trim(),
    };

    this.devolucoesMock.adicionar(novaDevolucao);

    this.router.navigate(['/devolucoes']);
  }
}