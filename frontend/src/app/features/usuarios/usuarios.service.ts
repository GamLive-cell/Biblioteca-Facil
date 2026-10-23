import { Usuario, UsuarioEntrada } from './usuario.model';

export abstract class UsuariosService {
  abstract listar(): Usuario[];
  abstract buscarPorId(id: string): Usuario | undefined;
  abstract criar(dados: UsuarioEntrada): Usuario;
  abstract atualizar(id: string, dados: UsuarioEntrada): Usuario | undefined;
  abstract excluir(id: string): void;
}
