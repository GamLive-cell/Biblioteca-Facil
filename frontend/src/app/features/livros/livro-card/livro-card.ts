import { Component, input, output } from '@angular/core';
import { Livro } from '../livro.model';
@Component({ selector: 'app-livro-card', standalone: true, templateUrl: './livro-card.html', styleUrl: './livro-card.css' })
export class LivroCard {
  livro = input.required<Livro>();
  editar = output<string>();
  excluir = output<string>();
}
