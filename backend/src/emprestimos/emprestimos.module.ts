import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmprestimosController } from './emprestimos.controller';
import { EmprestimosService } from './emprestimos.service';

import {
  Emprestimo,
  EmprestimoSchema,
} from './schemas/emprestimo.schema';

import { Livro, LivroSchema } from '../livros/livro.schema';
import { Usuario, UsuarioSchema } from '../usuarios/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Emprestimo.name, schema: EmprestimoSchema },
      { name: Livro.name, schema: LivroSchema },
      { name: Usuario.name, schema: UsuarioSchema },
    ]),
  ],
  controllers: [EmprestimosController],
  providers: [EmprestimosService],
  exports: [EmprestimosService],
})
export class EmprestimosModule {}
