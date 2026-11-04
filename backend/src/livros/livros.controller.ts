
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { LivrosService } from './livros.service';
import { CriarLivroDto } from './dto/criar-livro.dto';
import { AtualizarLivroDto } from './dto/atualizar-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  criar(@Body() dados: CriarLivroDto) {
    return this.livrosService.criar(dados);
  }

  @Get()
  listar() {
    return this.livrosService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.livrosService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(
    @Param('id') id: string,
    @Body() dados: AtualizarLivroDto,
  ) {
    return this.livrosService.atualizar(id, dados);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.livrosService.remover(id);
  }
}
