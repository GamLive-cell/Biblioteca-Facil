import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from '../livros.service';
@Component({ selector: 'app-livro-form', standalone: true, imports: [ReactiveFormsModule], templateUrl: './livro-form.html', styleUrl: './livro-form.css' })
export class LivroForm {
  private servico=inject(LivrosService); private rota=inject(ActivatedRoute); private router=inject(Router);
  editando=signal(false); erro=signal('');
  form=new FormGroup({
    titulo:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.minLength(2)]}),
    autor:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.minLength(3)]}),
    isbn:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.minLength(10)]}),
    categoria:new FormControl('',{nonNullable:true,validators:[Validators.required]}),
    anoPublicacao:new FormControl(new Date().getFullYear(),{nonNullable:true,validators:[Validators.required,Validators.min(1000),Validators.max(new Date().getFullYear())]}),
    quantidade:new FormControl(1,{nonNullable:true,validators:[Validators.required,Validators.min(0)]}),
    descricao:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.minLength(5)]}),
  });
  constructor(){const id=this.rota.snapshot.paramMap.get('id');if(id){const livro=this.servico.buscarPorId(id);if(!livro){this.erro.set('Livro não encontrado.');return;}this.editando.set(true);this.form.setValue({titulo:livro.titulo,autor:livro.autor,isbn:livro.isbn,categoria:livro.categoria,anoPublicacao:livro.anoPublicacao,quantidade:livro.quantidade,descricao:livro.descricao});}}
  salvar():void{this.erro.set('');this.form.markAllAsTouched();if(this.form.invalid){this.erro.set('Confira os campos destacados.');return;}const dados=this.form.getRawValue();const id=this.rota.snapshot.paramMap.get('id');if(id){if(!this.servico.atualizar(id,dados)){this.erro.set('Não foi possível atualizar o livro.');return;}}else{this.servico.criar(dados);}this.router.navigate(['/livros']);}
  cancelar():void{this.router.navigate(['/livros']);}
}
