
import { Injectable } from '@angular/core';
import { Emprestimo } from './emprestimo.model';

@Injectable({
  providedIn: 'root',
})
export class EmprestimosMock {
  private emprestimos: Emprestimo[] = [
    {
      _id: 'emp1',
      livroId: 'liv1',
      tituloLivro: 'Dom Casmurro',
      usuarioId: 'usr1',
      nomeUsuario: 'João Silva',
      dataEmprestimo: '2026-10-20',
      dataPrevistaDevolucao: '2026-11-03',
      status: 'ativo',
      observacao: '',
    },
    {
      _id: 'emp2',
      livroId: 'liv2',
      tituloLivro: 'O Pequeno Príncipe',
      usuarioId: 'usr2',
      nomeUsuario: 'Maria Santos',
      dataEmprestimo: '2026-10-15',
      dataPrevistaDevolucao: '2026-10-22',
      status: 'atrasado',
      observacao: 'Prazo de devolução expirado',
    },
  ];

  private obterDataAtual(): string {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  private atualizarStatusAutomaticamente(): void {
    const hoje = this.obterDataAtual();

    this.emprestimos.forEach((emprestimo) => {
      if (emprestimo.status === 'devolvido') {
        return;
      }

      if (emprestimo.dataPrevistaDevolucao < hoje) {
        emprestimo.status = 'atrasado';
        emprestimo.observacao = 'Prazo de devolução expirado';
      } else {
        emprestimo.status = 'ativo';

        if (emprestimo.observacao === 'Prazo de devolução expirado') {
          emprestimo.observacao = '';
        }
      }
    });
  }

  listar(): Emprestimo[] {
    this.atualizarStatusAutomaticamente();

    return [...this.emprestimos];
  }

  buscarPorId(id: string): Emprestimo | undefined {
    return this.emprestimos.find(
      (emprestimo) => emprestimo._id === id
    );
  }

  adicionar(emprestimo: Emprestimo): void {
    this.emprestimos.push(emprestimo);
  }

  atualizar(
    id: string,
    dadosAtualizados: Partial<Emprestimo>
  ): boolean {
    const indice = this.emprestimos.findIndex(
      (emprestimo) => emprestimo._id === id
    );

    if (indice === -1) {
      return false;
    }

    this.emprestimos[indice] = {
      ...this.emprestimos[indice],
      ...dadosAtualizados,
    };

    return true;
  }

  remover(id: string): boolean {
    const quantidadeInicial = this.emprestimos.length;

    this.emprestimos = this.emprestimos.filter(
      (emprestimo) => emprestimo._id !== id
    );

    return this.emprestimos.length < quantidadeInicial;
  }
}
