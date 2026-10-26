import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LivroCard } from '../livro-card/livro-card';
import { LivrosService } from '../livros.service';
@Component({ selector: 'app-livros-lista', standalone: true, imports: [LivroCard], templateUrl: './livros-lista.html', styleUrl: './livros-lista.css' })
export class LivrosLista {
  private servico = inject(LivrosService); private router = inject(Router);
  pesquisa = signal(''); carregando = signal(false); erro = signal(''); sucesso = signal('');
  livros = computed(() => { const termo = this.pesquisa().trim().toLowerCase(); return this.servico.listar().filter(l => l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo) || l.isbn.includes(termo) || l.categoria.toLowerCase().includes(termo)); });
  novo(): void { this.router.navigate(['/livros/novo']); }
  editar(id: string): void { this.router.navigate(['/livros', id, 'editar']); }
  excluir(id: string): void { this.erro.set(''); this.servico.excluir(id); this.sucesso.set('Livro excluído.'); }
}
