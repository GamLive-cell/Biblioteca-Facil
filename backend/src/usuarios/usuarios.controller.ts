import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { UsuariosService } from './usuarios.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criar(@Body() dados: CriarUsuarioDto) {
    return this.usuariosService.criar(dados);
  }

  @Get()
  listar() {
    return this.usuariosService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.usuariosService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(
    @Param('id') id: string,
    @Body() dados: AtualizarUsuarioDto,
  ) {
    return this.usuariosService.atualizar(id, dados);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  excluir(@Param('id') id: string) {
    return this.usuariosService.excluir(id);
  }
}
