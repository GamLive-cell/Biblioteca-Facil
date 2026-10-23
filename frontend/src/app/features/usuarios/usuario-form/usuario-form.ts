
import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-form',
  imports: [FormsModule],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.css',
})
export class UsuarioForm {
  usuarioSalvo = output<Usuario>();

  private servico = inject(UsuariosService);
  private router = inject(Router);

  nome = '';
  email = '';
  perfil = 'Leitor';
  erro = '';

  salvar() {
    this.erro = '';

    if (!this.nome.trim() || !this.email.trim() || !this.perfil) {
      this.erro = 'Preencha todos os campos.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.erro = 'Digite um e-mail válido.';
      return;
    }

    const usuario = this.servico.adicionar({
      nome: this.nome.trim(),
      email: this.email.trim(),
      perfil: this.perfil,
    });

    this.usuarioSalvo.emit(usuario);
    this.router.navigate(['/usuarios']);
  }
}


