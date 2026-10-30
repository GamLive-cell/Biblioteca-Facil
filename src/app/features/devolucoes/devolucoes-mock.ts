
import { Injectable } from '@angular/core';
import { Devolucao } from './devolucao.model';
import { EmprestimosMock } from '../emprestimos/emprestimos-mock';

@Injectable({
  providedIn: 'root',
})
export class DevolucoesMock {
  
remover(id: string): boolean {
  const quantidadeInicial = this.devolucoes.length;

  this.devolucoes = this.devolucoes.filter(
    (devolucao) => devolucao._id !== id
  );

  return this.devolucoes.length < quantidadeInicial;
}

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

  constructor(private emprestimosMock: EmprestimosMock) {
    // Sincroniza os empréstimos que já possuem devolução registrada.
    this.devolucoes.forEach((devolucao) => {
      this.emprestimosMock.atualizar(devolucao.emprestimoId, {
        status: 'devolvido',
      });
    });
  }

  listar(): Devolucao[] {
    return [...this.devolucoes];
  }

  buscarPorId(id: string): Devolucao | undefined {
    return this.devolucoes.find(
      (devolucao) => devolucao._id === id
    );
  }

  buscarPorEmprestimo(emprestimoId: string): Devolucao | undefined {
    return this.devolucoes.find(
      (devolucao) => devolucao.emprestimoId === emprestimoId
    );
  }

  adicionar(devolucao: Devolucao): boolean {
    // Impede duas devoluções para o mesmo empréstimo.
    if (this.buscarPorEmprestimo(devolucao.emprestimoId)) {
      return false;
    }

    // Verifica se o empréstimo existe.
    const emprestimo = this.emprestimosMock.buscarPorId(
      devolucao.emprestimoId
    );

    if (!emprestimo || emprestimo.status === 'devolvido') {
      return false;
    }

    this.devolucoes.push(devolucao);

    // Atualiza o empréstimo após registrar a devolução.
    this.emprestimosMock.atualizar(devolucao.emprestimoId, {
      status: 'devolvido',
    });

    return true;
  }
}
