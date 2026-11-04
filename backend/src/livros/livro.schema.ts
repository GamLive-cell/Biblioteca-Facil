
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LivroDocument = HydratedDocument<Livro>;

@Schema({ timestamps: true })
export class Livro {
  @Prop({ required: true, trim: true })
  titulo: string;

  @Prop({ required: true, trim: true })
  autor: string;

  @Prop({ required: true, unique: true, trim: true })
  isbn: string;

  @Prop({ required: true, trim: true })
  editora: string;

  @Prop({ required: true, min: 0 })
  anoPublicacao: number;

  @Prop({ required: true, trim: true })
  categoria: string;

  @Prop({ required: true, min: 0 })
  quantidadeTotal: number;

  @Prop({ required: true, min: 0 })
  quantidadeDisponivel: number;
}

export const LivroSchema = SchemaFactory.createForClass(Livro);
