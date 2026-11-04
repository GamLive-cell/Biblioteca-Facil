import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Emprestimo, EmprestimoDocument, StatusEmprestimo } from './schemas/emprestimo.schema';
import { Livro, LivroDocument } from '../livros/livro.schema';
import { Usuario, UsuarioDocument } from '../usuarios/usuario.schema';
import { CriarEmprestimoDto } from './dto/criar-emprestimo.dto';

@Injectable()
export class EmprestimosService {
  constructor(
    @InjectModel(Emprestimo.name)
    private readonly emprestimoModel: Model<EmprestimoDocument>,

    @InjectModel(Livro.name)
    private readonly livroModel: Model<LivroDocument>,

    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<UsuarioDocument>,
  ) {}

  async criar(dados: CriarEmprestimoDto): Promise<Emprestimo> {
    const usuario = await this.usuarioModel.findById(dados.usuario).exec();

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    const dataPrevista = new Date(dados.dataPrevistaDevolucao);

    if (Number.isNaN(dataPrevista.getTime()) || dataPrevista <= new Date()) {
      throw new BadRequestException('A data de devolução deve ser futura.');
    }

    const livro = await this.livroModel.findOneAndUpdate(
      {
        _id: dados.livro,
        quantidadeDisponivel: { $gt: 0 },
      },
      { $inc: { quantidadeDisponivel: -1 } },
      { new: true },
    ).exec();

    if (!livro) {
      const livroExiste = await this.livroModel.exists({ _id: dados.livro });

      if (!livroExiste) {
        throw new NotFoundException('Livro não encontrado.');
      }

      throw new ConflictException('Não há exemplares disponíveis.');
    }

    try {
      return await this.emprestimoModel.create({
        usuario: new Types.ObjectId(dados.usuario),
        livro: new Types.ObjectId(dados.livro),
        dataEmprestimo: new Date(),
        dataPrevistaDevolucao: dataPrevista,
        status: StatusEmprestimo.ATIVO,
      });
    } catch (erro) {
      await this.livroModel.updateOne(
        { _id: dados.livro },
        { $inc: { quantidadeDisponivel: 1 } },
      );
      throw erro;
    }
  }

  async listar(): Promise<Emprestimo[]> {
    return this.emprestimoModel
      .find()
      .populate('usuario', 'nome email perfil')
      .populate('livro', 'titulo autor isbn')
      .exec();
  }

  async buscarPorId(id: string): Promise<Emprestimo> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID de empréstimo inválido.');
    }

    const emprestimo = await this.emprestimoModel
      .findById(id)
      .populate('usuario', 'nome email perfil')
      .populate('livro', 'titulo autor isbn')
      .exec();

    if (!emprestimo) {
      throw new NotFoundException('Empréstimo não encontrado.');
    }

    return emprestimo;
  }

  async devolver(id: string): Promise<Emprestimo> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID de empréstimo inválido.');
    }

    const emprestimo = await this.emprestimoModel.findOneAndUpdate(
      { _id: id, status: StatusEmprestimo.ATIVO },
      { $set: { status: StatusEmprestimo.DEVOLVIDO } },
      { new: true },
    ).exec();

    if (!emprestimo) {
      const existe = await this.emprestimoModel.exists({ _id: id });

      if (!existe) {
        throw new NotFoundException('Empréstimo não encontrado.');
      }

      throw new ConflictException('Este empréstimo já foi finalizado.');
    }

    await this.livroModel.updateOne(
      { _id: emprestimo.livro },
      { $inc: { quantidadeDisponivel: 1 } },
    );

    return emprestimo;
  }
}
