
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimosMock } from '../emprestimos-mock';

@Component({
  selector: 'app-emprestimos-lista',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './emprestimos-lista.html',
  styleUrl: './emprestimos-lista.css',
})
export class EmprestimosLista implements OnInit {
  emprestimos: Emprestimo[] = [];

  constructor(
    private emprestimosMock: EmprestimosMock,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarEmprestimos();
  }

  carregarEmprestimos(): void {
    this.emprestimos = this.emprestimosMock.listar();
  }

  editar(id: string): void {
    this.router.navigate(['/emprestimos', id, 'editar']);
  }

  concluir(id: string): void {
    const atualizado = this.emprestimosMock.atualizar(id, {
      status: 'devolvido',
    });

    if (atualizado) {
      this.carregarEmprestimos();
    }
  }
}
