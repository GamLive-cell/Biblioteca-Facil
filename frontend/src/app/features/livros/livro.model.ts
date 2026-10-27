export interface Livro {
  _id: string;
  titulo: string;
  autor: string;
  isbn: string;
  categoria: string;
  anoPublicacao: number;
  quantidade: number;
  descricao: string;
}
export type LivroEntrada = Omit<Livro, '_id'>;
