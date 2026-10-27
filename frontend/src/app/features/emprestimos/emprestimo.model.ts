export interface Emprestimo {
  _id: string;
  livroId: string;
  tituloLivro: string;
  usuarioId: string;
  nomeUsuario: string;
  dataEmprestimo: string;
  dataPrevistaDevolucao: string;
  status: 'ativo' | 'devolvido' | 'atrasado';
  observacao?: string;
}