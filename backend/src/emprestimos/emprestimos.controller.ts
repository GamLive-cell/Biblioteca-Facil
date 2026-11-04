import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
} from '@nestjs/common';

import { EmprestimosService } from './emprestimos.service';
import { CriarEmprestimoDto } from './dto/criar-emprestimo.dto';

@Controller('emprestimos')
export class EmprestimosController {
  constructor(
    private readonly emprestimosService: EmprestimosService,
  ) {}

  @Post()
  criar(@Body() dados: CriarEmprestimoDto) {
    return this.emprestimosService.criar(dados);
  }

  @Get()
  listar() {
    return this.emprestimosService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.emprestimosService.buscarPorId(id);
  }

  @Patch(':id/devolver')
  devolver(@Param('id') id: string) {
    return this.emprestimosService.devolver(id);
  }
}
