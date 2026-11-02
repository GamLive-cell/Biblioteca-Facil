import { Livro, LivroEntrada } from './livro.model';

export abstract class LivrosService {
  abstract listar(): Livro[];
  abstract buscarPorId(id: string): Livro | undefined;
  abstract criar(dados: LivroEntrada): Livro;
  abstract atualizar(id: string, dados: LivroEntrada): Livro | undefined;
  abstract excluir(id: string): void;
}
