import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type EmprestimoDocument = HydratedDocument<Emprestimo>;

export enum StatusEmprestimo {
  ATIVO = 'ATIVO',
  DEVOLVIDO = 'DEVOLVIDO',
  CANCELADO = 'CANCELADO',
}

@Schema({ timestamps: true })
export class Emprestimo {
  @Prop({
    type: Types.ObjectId,
    ref: 'Usuario',
    required: true,
  })
  usuario: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Livro',
    required: true,
  })
  livro: Types.ObjectId;

  @Prop({ required: true })
  dataEmprestimo: Date;

  @Prop({ required: true })
  dataPrevistaDevolucao: Date;

  @Prop({
    type: String,
    enum: StatusEmprestimo,
    default: StatusEmprestimo.ATIVO,
  })
  status: StatusEmprestimo;
}

export const EmprestimoSchema = SchemaFactory.createForClass(Emprestimo);

EmprestimoSchema.index({ usuario: 1 });
EmprestimoSchema.index({ livro: 1 });
EmprestimoSchema.index({ status: 1 });
