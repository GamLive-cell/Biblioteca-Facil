import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Usuario, UsuarioDocument } from './usuario.schema';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<UsuarioDocument>,
  ) {}

  async criar(dados: CriarUsuarioDto): Promise<Usuario> {
    try {
      return await this.usuarioModel.create(dados);
    } catch (erro: any) {
      if (erro.code === 11000) {
        throw new ConflictException('Este e-mail já está cadastrado.');
      }
      throw erro;
    }
  }

  async listar(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Usuario> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID de usuário inválido.');
    }

    const usuario = await this.usuarioModel.findById(id).exec();

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    return usuario;
  }

  async atualizar(
    id: string,
    dados: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID de usuário inválido.');
    }

    try {
      const usuario = await this.usuarioModel
        .findByIdAndUpdate(id, dados, {
          new: true,
          runValidators: true,
        })
        .exec();

      if (!usuario) {
        throw new NotFoundException('Usuário não encontrado.');
      }

      return usuario;
    } catch (erro: any) {
      if (erro.code === 11000) {
        throw new ConflictException('Este e-mail já está cadastrado.');
      }
      throw erro;
    }
  }

  async excluir(id: string): Promise<void> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID de usuário inválido.');
    }

    const usuario = await this.usuarioModel.findByIdAndDelete(id).exec();

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado.');
    }
  }
}
