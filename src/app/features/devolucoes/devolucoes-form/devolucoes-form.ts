
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Devolucao } from '../devolucao.model';
import { DevolucoesMock } from '../devolucoes-mock';
import { EmprestimosMock } from '../../emprestimos/emprestimos-mock';
import { Emprestimo } from '../../emprestimos/emprestimo.model';

@Component({
  selector: 'app-devolucoes-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './devolucoes-form.html',
  styleUrl: './devolucoes-form.css',
})
export class DevolucoesForm implements OnInit {
  emprestimosDisponiveis: Emprestimo[] = [];

  emprestimoId = '';
  dataDevolucao = new Date(
    Date.now() - new Date().getTimezoneOffset() * 60000
  ).toISOString().slice(0, 10);

  observacao = '';
  erro = '';

  constructor(
    private devolucoesMock: DevolucoesMock,
    private emprestimosMock: EmprestimosMock,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarEmprestimosDisponiveis();
  }

  carregarEmprestimosDisponiveis(): void {
    this.emprestimosDisponiveis = this.emprestimosMock.listar().filter(
      (emprestimo) =>
        emprestimo.status !== 'devolvido' &&
        !this.devolucoesMock.buscarPorEmprestimo(emprestimo._id)
    );
  }

  salvar(): void {
    this.erro = '';

    if (!this.emprestimoId || !this.dataDevolucao) {
      this.erro = 'Selecione um empréstimo e informe a data da devolução.';
      return;
    }

    const emprestimo = this.emprestimosMock.buscarPorId(
      this.emprestimoId
    );

    if (!emprestimo || emprestimo.status === 'devolvido') {
      this.erro = 'Empréstimo indisponível para devolução.';
      return;
    }

    if (this.devolucoesMock.buscarPorEmprestimo(emprestimo._id)) {
      this.erro = 'Este empréstimo já possui uma devolução registrada.';
      return;
    }

    if (this.dataDevolucao < emprestimo.dataEmprestimo) {
      this.erro = 'A data de devolução não pode ser anterior à data do empréstimo.';
      return;
    }

    const novaDevolucao: Devolucao = {
      _id: Date.now().toString(),
      emprestimoId: emprestimo._id,
      tituloLivro: emprestimo.tituloLivro,
      nomeUsuario: emprestimo.nomeUsuario,
      dataDevolucao: this.dataDevolucao,
      observacao: this.observacao.trim(),
    };

    const adicionada = this.devolucoesMock.adicionar(novaDevolucao);

    if (!adicionada) {
      this.erro = 'Não foi possível registrar a devolução.';
      return;
    }

    this.router.navigate(['/devolucoes']);
  }
}
