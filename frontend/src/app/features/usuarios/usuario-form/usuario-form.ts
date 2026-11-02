import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.css',
})
export class UsuarioForm {
  private servico = inject(UsuariosService);
  private rota = inject(ActivatedRoute);
  private router = inject(Router);

  editando = signal(false);
  erro = signal('');
  sucesso = signal('');

  form = new FormGroup({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    perfil: new FormControl('Leitor', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor() {
    const id = this.rota.snapshot.paramMap.get('id');
    if (id) {
      const usuario = this.servico.buscarPorId(id);
      if (!usuario) {
        this.erro.set('Usuário não encontrado.');
        return;
      }
      this.editando.set(true);
      this.form.setValue({
        nome: usuario.nome,
        email: usuario.email,
        perfil: usuario.perfil,
      });
    }
  }

  salvar(): void {
    this.erro.set('');
    this.sucesso.set('');
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.erro.set('Confira os campos destacados antes de continuar.');
      return;
    }

    const dados = this.form.getRawValue();
    const id = this.rota.snapshot.paramMap.get('id');

    if (id) {
      const atualizado = this.servico.atualizar(id, dados);
      if (!atualizado) {
        this.erro.set('Não foi possível encontrar o usuário para editar.');
        return;
      }
    } else {
      this.servico.criar(dados);
    }

    this.router.navigate(['/usuarios']);
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }
}
