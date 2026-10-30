
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { LivrosService } from '../../livros/livros.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { EmprestimosMock } from '../../emprestimos/emprestimos-mock';

import { Livro } from '../../livros/livro.model';
import { Usuario } from '../../usuarios/usuario.model';
import { Emprestimo } from '../../emprestimos/emprestimo.model';

interface DadosMensais {
  mes: string;
  quantidade: number;
  percentual: number;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  totalLivros = 0;
  exemplaresCadastrados = 0;
  totalUsuarios = 0;

  emprestimosAtivos = 0;
  emprestimosAtrasados = 0;
  emprestimosDevolvidos = 0;

  ultimosEmprestimos: Emprestimo[] = [];

  dadosMensais: DadosMensais[] = [];

  constructor(
    private livrosService: LivrosService,
    private usuariosService: UsuariosService,
    private emprestimosMock: EmprestimosMock
  ) {}

  ngOnInit(): void {
    this.carregarResumo();
  }

  carregarResumo(): void {
    const livros: Livro[] = this.livrosService.listar();
    const usuarios: Usuario[] = this.usuariosService.listar();
    const emprestimos: Emprestimo[] = this.emprestimosMock.listar();

    this.totalLivros = livros.length;

    this.exemplaresCadastrados = livros.reduce(
      (total, livro) => total + Number(livro.quantidade || 0),
      0
    );

    this.totalUsuarios = usuarios.length;

    this.emprestimosAtivos = emprestimos.filter(
      emprestimo => emprestimo.status === 'ativo'
    ).length;

    this.emprestimosAtrasados = emprestimos.filter(
      emprestimo => emprestimo.status === 'atrasado'
    ).length;

    this.emprestimosDevolvidos = emprestimos.filter(
      emprestimo => emprestimo.status === 'devolvido'
    ).length;

    this.ultimosEmprestimos = [...emprestimos]
      .sort((a, b) =>
        b.dataEmprestimo.localeCompare(a.dataEmprestimo)
      )
      .slice(0, 5);

    this.calcularDadosMensais(emprestimos);
  }

  calcularDadosMensais(emprestimos: Emprestimo[]): void {
    const hoje = new Date();
    const meses: DadosMensais[] = [];

    for (let i = 5; i >= 0; i--) {
      const data = new Date(
        hoje.getFullYear(),
        hoje.getMonth() - i,
        1
      );

      const ano = data.getFullYear();
      const mes = data.getMonth();

      const quantidade = emprestimos.filter(emprestimo => {
        const dataEmprestimo = new Date(
          `${emprestimo.dataEmprestimo}T12:00:00`
        );

        return (
          dataEmprestimo.getFullYear() === ano &&
          dataEmprestimo.getMonth() === mes
        );
      }).length;

      meses.push({
        mes: data.toLocaleDateString('pt-BR', {
          month: 'short',
        }),
        quantidade,
        percentual: 0,
      });
    }

    const maiorQuantidade = Math.max(
      ...meses.map(mes => mes.quantidade),
      1
    );

    this.dadosMensais = meses.map(mes => ({
      ...mes,
      percentual: (mes.quantidade / maiorQuantidade) * 100,
    }));
  }

  get totalEmprestimos(): number {
    return (
      this.emprestimosAtivos +
      this.emprestimosAtrasados +
      this.emprestimosDevolvidos
    );
  }

  get percentualAtivos(): number {
    return this.totalEmprestimos
      ? (this.emprestimosAtivos / this.totalEmprestimos) * 100
      : 0;
  }

  get percentualAtrasados(): number {
    return this.totalEmprestimos
      ? (this.emprestimosAtrasados / this.totalEmprestimos) * 100
      : 0;
  }

  get percentualDevolvidos(): number {
    return this.totalEmprestimos
      ? (this.emprestimosDevolvidos / this.totalEmprestimos) * 100
      : 0;
  }
}
