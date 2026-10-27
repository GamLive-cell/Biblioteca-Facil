import { Injectable, signal } from '@angular/core';
import { Livro, LivroEntrada } from './livro.model';
import { LivrosService } from './livros.service';

@Injectable()
export class LivrosMockService extends LivrosService {
  private contador = 6;
  private dados = signal<Livro[]>([
    { _id: '1', titulo: 'Dom Casmurro', autor: 'Machado de Assis', isbn: '9788535902778', categoria: 'Clássico', anoPublicacao: 1899, quantidade: 3, descricao: 'Romance clássico da literatura brasileira.' },
    { _id: '2', titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', isbn: '9788522031445', categoria: 'Infantil', anoPublicacao: 1943, quantidade: 5, descricao: 'Uma história sobre amizade e responsabilidade.' },
    { _id: '3', titulo: '1984', autor: 'George Orwell', isbn: '9788535914849', categoria: 'Ficção', anoPublicacao: 1949, quantidade: 2, descricao: 'Romance distópico sobre vigilância e poder.' },
    { _id: '4', titulo: 'O Hobbit', autor: 'J. R. R. Tolkien', isbn: '9788595084742', categoria: 'Fantasia', anoPublicacao: 1937, quantidade: 4, descricao: 'A aventura de Bilbo Bolseiro.' },
    { _id: '5', titulo: 'Uma Breve História do Tempo', autor: 'Stephen Hawking', isbn: '9788580576467', categoria: 'Ciência', anoPublicacao: 1988, quantidade: 1, descricao: 'Introdução a questões sobre o universo.' },
  ]);
  listar(): Livro[] { return this.dados(); }
  buscarPorId(id: string): Livro | undefined { return this.dados().find(livro => livro._id === id); }
  criar(dados: LivroEntrada): Livro {
    const novo = { ...dados, _id: String(this.contador++) };
    this.dados.update(lista => [...lista, novo]);
    return novo;
  }
  atualizar(id: string, dados: LivroEntrada): Livro | undefined {
    if (!this.buscarPorId(id)) return undefined;
    const atualizado = { ...dados, _id: id };
    this.dados.update(lista => lista.map(livro => livro._id === id ? atualizado : livro));
    return atualizado;
  }
  excluir(id: string): void { this.dados.update(lista => lista.filter(livro => livro._id !== id)); }
}
