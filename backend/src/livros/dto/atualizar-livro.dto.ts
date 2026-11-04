import { PartialType } from '@nestjs/mapped-types';
import { CriarLivroDto } from './criar-livro.dto';

export class AtualizarLivroDto extends PartialType(CriarLivroDto) {}