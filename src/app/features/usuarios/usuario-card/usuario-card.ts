import { Component, input, output } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  templateUrl: './usuario-card.html',
  styleUrl: './usuario-card.css',
})
export class UsuarioCard {
  usuario = input.required<Usuario>();
  editar = output<string>();
  excluir = output<string>();
}
