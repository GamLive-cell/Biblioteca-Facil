import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(private devolucoesMock: DevolucoesMock) {}

  ngOnInit(): void {
    this.devolucoes = this.devolucoesMock.listar();
  }
}