
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Livro, LivroDocument } from './livro.schema';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro.name)
    private livroModel: Model<LivroDocument>,
  ) {}

  async criar(dados: Partial<Livro>): Promise<Livro> {
    const novoLivro = new this.livroModel(dados);
    return novoLivro.save();
  }

  async listar(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Livro> {
    const livro = await this.livroModel.findById(id).exec();

    if (!livro) {
      throw new NotFoundException('Livro não encontrado');
    }

    return livro;
  }

  async atualizar(id: string, dados: Partial<Livro>): Promise<Livro> {
    const livro = await this.livroModel
      .findByIdAndUpdate(id, dados, { new: true, runValidators: true })
      .exec();

    if (!livro) {
      throw new NotFoundException('Livro não encontrado');
    }

    return livro;
  }

  async remover(id: string): Promise<void> {
    const livro = await this.livroModel.findByIdAndDelete(id).exec();

    if (!livro) {
      throw new NotFoundException('Livro não encontrado');
    }
  }
}
