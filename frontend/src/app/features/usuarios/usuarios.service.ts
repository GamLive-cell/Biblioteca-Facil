
import { Injectable, signal } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private contador = 4;

  private lista = signal<Usuario[]>([
    { id: 1, nome: 'Ana Silva', email: 'ana@email.com', perfil: 'Bibliotecária' },
    { id: 2, nome: 'Carlos Souza', email: 'carlos@email.com', perfil: 'Leitor' },
    { id: 3, nome: 'Mariana Costa', email: 'mariana@email.com', perfil: 'Leitor' },
  ]);

  usuarios = this.lista.asReadonly();

  adicionar(usuario: Omit<Usuario, 'id'>): Usuario {
    const novoUsuario: Usuario = {
      ...usuario,
      id: this.contador++,
    };

    this.lista.update((usuarios) => [...usuarios, novoUsuario]);
    return novoUsuario;
  }
}
