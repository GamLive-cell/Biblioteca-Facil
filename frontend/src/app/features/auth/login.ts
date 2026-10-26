import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthMockService } from './auth-mock.service';
@Component({selector:'app-login',standalone:true,imports:[ReactiveFormsModule,RouterLink],templateUrl:'./login.html',styleUrl:'./auth.css'})
export class Login { private auth=inject(AuthMockService);private router=inject(Router);erro=signal('');sucesso=signal('');form=new FormGroup({email:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.email]}),senha:new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.minLength(6)]})});entrar():void{this.erro.set('');this.form.markAllAsTouched();if(this.form.invalid)return;const v=this.form.getRawValue();if(!this.auth.entrar(v.email,v.senha)){this.erro.set('E-mail ou senha inválidos.');return;}this.sucesso.set('Login demonstrativo realizado.');this.router.navigate(['/livros']);}}
