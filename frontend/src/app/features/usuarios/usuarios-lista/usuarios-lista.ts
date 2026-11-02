import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioCard } from '../usuario-card/usuario-card';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  imports: [UsuarioCard],
  templateUrl: './usuarios-lista.html',
  styleUrl: './usuarios-lista.css',
})
export class UsuariosLista {
  private servico = inject(UsuariosService);
  private router = inject(Router);

  pesquisa = signal('');
  carregando = signal(false);
  erro = signal('');
  sucesso = signal('');

  usuarios = computed(() => {
    const termo = this.pesquisa().trim().toLowerCase();
    return this.servico.listar().filter(usuario =>
      usuario.nome.toLowerCase().includes(termo) ||
      usuario.email.toLowerCase().includes(termo)
    );
  });

  novo(): void {
    this.router.navigate(['/usuarios/novo']);
  }

  editar(id: string): void {
    this.router.navigate(['/usuarios', id, 'editar']);
  }

  excluir(id: string): void {
    this.erro.set('');
    this.sucesso.set('');
    this.servico.excluir(id);
    this.sucesso.set('Usuário excluído com sucesso.');
  }
}
