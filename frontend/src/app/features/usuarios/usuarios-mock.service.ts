import { Injectable, signal } from '@angular/core';
import { Usuario, UsuarioEntrada } from './usuario.model';
import { UsuariosService } from './usuarios.service';

@Injectable()
export class UsuariosMockService extends UsuariosService {
  private contador = 4;

  private dados = signal<Usuario[]>([
    { _id: '1', nome: 'Ana Silva', email: 'ana@email.com', perfil: 'Bibliotecária' },
    { _id: '2', nome: 'Carlos Souza', email: 'carlos@email.com', perfil: 'Leitor' },
    { _id: '3', nome: 'Mariana Costa', email: 'mariana@email.com', perfil: 'Leitor' },
  ]);

  listar(): Usuario[] {
    return this.dados();
  }

  buscarPorId(id: string): Usuario | undefined {
    return this.dados().find(usuario => usuario._id === id);
  }

  criar(dados: UsuarioEntrada): Usuario {
    const novo: Usuario = { ...dados, _id: String(this.contador++) };
    this.dados.update(lista => [...lista, novo]);
    return novo;
  }

  atualizar(id: string, dados: UsuarioEntrada): Usuario | undefined {
    const existente = this.buscarPorId(id);
    if (!existente) return undefined;

    const atualizado = { ...dados, _id: id };
    this.dados.update(lista =>
      lista.map(usuario => usuario._id === id ? atualizado : usuario)
    );
    return atualizado;
  }

  excluir(id: string): void {
    this.dados.update(lista => lista.filter(usuario => usuario._id !== id));
  }
}
