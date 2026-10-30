
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Devolucao } from '../devolucao.model';
import { DevolucoesMock } from '../devolucoes-mock';

@Component({
  selector: 'app-devolucoes-lista',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './devolucoes-lista.html',
  styleUrl: './devolucoes-lista.css',
})
export class DevolucoesLista implements OnInit {
  devolucoes: Devolucao[] = [];

  constructor(
    private devolucoesMock: DevolucoesMock,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarDevolucoes();
  }

  carregarDevolucoes(): void {
    this.devolucoes = this.devolucoesMock.listar();
  }

  visualizar(id: string): void {
    const devolucao = this.devolucoesMock.buscarPorId(id);

    if (!devolucao) {
      return;
    }

    const detalhes = [
      `Livro: ${devolucao.tituloLivro}`,
      `Usuário: ${devolucao.nomeUsuario}`,
      `Data da devolução: ${devolucao.dataDevolucao}`,
      `Observação: ${devolucao.observacao || 'Nenhuma observação'}`,
    ].join('\n');

    alert(detalhes);
  }

  excluir(id: string): void {
    const confirmado = confirm(
      'Tem certeza que deseja excluir este registro de devolução?'
    );

    if (!confirmado) {
      return;
    }

    const removido = this.devolucoesMock.remover(id);

    if (removido) {
      this.carregarDevolucoes();
    }
  }
}
