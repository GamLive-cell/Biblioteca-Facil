import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
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

  constructor(private emprestimosMock: EmprestimosMock) {}

  ngOnInit(): void {
    this.emprestimos = this.emprestimosMock.listar();
  }
}
