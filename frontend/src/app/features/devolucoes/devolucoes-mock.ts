import { Injectable } from '@angular/core';
import { Devolucao } from './devolucao.model';

@Injectable({
  providedIn: 'root',
})
export class DevolucoesMock {
  private devolucoes: Devolucao[] = [
    {
      _id: '1',
      emprestimoId: 'emp1',
      tituloLivro: 'Dom Casmurro',
      nomeUsuario: 'João Silva',
      dataDevolucao: '2026-10-25',
      observacao: 'Livro devolvido em bom estado',
    },
    {
      _id: '2',
      emprestimoId: 'emp2',
      tituloLivro: 'O Pequeno Príncipe',
      nomeUsuario: 'Maria Santos',
      dataDevolucao: '2026-10-26',
      observacao: 'Livro devolvido sem danos',
    },
  ];

  listar(): Devolucao[] {
    return [...this.devolucoes];
  }

  buscarPorId(id: string): Devolucao | undefined {
    return this.devolucoes.find((devolucao) => devolucao._id === id);
  }

  adicionar(devolucao: Devolucao): void {
    this.devolucoes.push(devolucao);
  }
}
