import { Router } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  imports: [RouterLink],
  templateUrl: './usuarios-lista.html',
  styleUrl: './usuarios-lista.css',
})
export class UsuariosLista {
  private router = inject(Router);

abrirFormulario() {
  this.router.navigate(['/usuarios/novo']);
}
  private servico = inject(UsuariosService);

  usuarios = this.servico.usuarios;
  pesquisa = signal('');

  usuariosFiltrados() {
    const termo = this.pesquisa().toLowerCase().trim();

    return this.usuarios().filter(
      (usuario) =>
        usuario.nome.toLowerCase().includes(termo) ||
        usuario.email.toLowerCase().includes(termo)
    );
  }
}
