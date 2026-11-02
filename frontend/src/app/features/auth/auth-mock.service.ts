import { Injectable, signal } from '@angular/core';
export interface ContaMock { nome: string; email: string; senha: string; }
@Injectable({ providedIn: 'root' })
export class AuthMockService {
  private contas = signal<ContaMock[]>([{ nome: 'Bibliotecária Demo', email: 'admin@biblioteca.com', senha: '123456' }]);
  cadastrar(nome: string, email: string, senha: string): string | null {
    if (this.contas().some(c => c.email.toLowerCase() === email.toLowerCase())) return 'Já existe uma conta com este e-mail.';
    this.contas.update(lista => [...lista, { nome, email, senha }]); return null;
  }
  entrar(email: string, senha: string): boolean { return this.contas().some(c => c.email.toLowerCase() === email.toLowerCase() && c.senha === senha); }
}
