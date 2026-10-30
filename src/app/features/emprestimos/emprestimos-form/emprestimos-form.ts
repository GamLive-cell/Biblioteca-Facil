import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimosMock } from '../emprestimos-mock';

function formatarDataLocal(data: Date): string {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');

  return `${ano}-${mes}-${dia}`;
}

function adicionarDias(data: Date, dias: number): Date {
  const resultado = new Date(data);
  resultado.setDate(resultado.getDate() + dias);
  return resultado;
}

@Component({
  selector: 'app-emprestimos-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './emprestimos-form.html',
  styleUrl: './emprestimos-form.css',
})
export class EmprestimosForm implements OnInit {
  emprestimoId = '';
  livroId = '';
  tituloLivro = '';
  usuarioId = '';
  nomeUsuario = '';

  dataEmprestimo = formatarDataLocal(new Date());

  dataPrevistaDevolucao = formatarDataLocal(
    adicionarDias(new Date(), 14)
  );

  observacao = '';
  erro = '';

  constructor(
    private emprestimosMock: EmprestimosMock,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    const emprestimo = this.emprestimosMock.buscarPorId(id);

    if (!emprestimo) {
      this.erro = 'Empréstimo não encontrado.';
      return;
    }

    this.emprestimoId = emprestimo._id;
    this.livroId = emprestimo.livroId;
    this.tituloLivro = emprestimo.tituloLivro;
    this.usuarioId = emprestimo.usuarioId;
    this.nomeUsuario = emprestimo.nomeUsuario;
    this.dataEmprestimo = emprestimo.dataEmprestimo;
    this.dataPrevistaDevolucao = emprestimo.dataPrevistaDevolucao;
    this.observacao = emprestimo.observacao || '';
  }

  salvar(): void {
    if (
      !this.livroId.trim() ||
      !this.tituloLivro.trim() ||
      !this.usuarioId.trim() ||
      !this.nomeUsuario.trim() ||
      !this.dataEmprestimo ||
      !this.dataPrevistaDevolucao
    ) {
      this.erro = 'Preencha todos os campos obrigatórios.';
      return;
    }

    if (this.dataPrevistaDevolucao < this.dataEmprestimo) {
      this.erro =
        'A data prevista de devolução não pode ser anterior à data do empréstimo.';
      return;
    }

    const dadosAtualizados: Partial<Emprestimo> = {
      livroId: this.livroId.trim(),
      tituloLivro: this.tituloLivro.trim(),
      usuarioId: this.usuarioId.trim(),
      nomeUsuario: this.nomeUsuario.trim(),
      dataEmprestimo: this.dataEmprestimo,
      dataPrevistaDevolucao: this.dataPrevistaDevolucao,
      observacao: this.observacao.trim(),
    };

    if (this.emprestimoId) {
      const atualizado = this.emprestimosMock.atualizar(
        this.emprestimoId,
        dadosAtualizados
      );

      if (!atualizado) {
        this.erro = 'Não foi possível atualizar o empréstimo.';
        return;
      }
    } else {
      const novoEmprestimo: Emprestimo = {
        _id: Date.now().toString(),
        livroId: this.livroId.trim(),
        tituloLivro: this.tituloLivro.trim(),
        usuarioId: this.usuarioId.trim(),
        nomeUsuario: this.nomeUsuario.trim(),
        dataEmprestimo: this.dataEmprestimo,
        dataPrevistaDevolucao: this.dataPrevistaDevolucao,
        status: 'ativo',
        observacao: this.observacao.trim(),
      };

      this.emprestimosMock.adicionar(novoEmprestimo);
    }

    this.router.navigate(['/emprestimos']);
  }
}