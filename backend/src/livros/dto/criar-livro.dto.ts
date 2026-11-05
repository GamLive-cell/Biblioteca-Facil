import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

export class CriarLivroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  autor: string;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  editora: string;

  @IsInt()
  @Min(0)
  @Max(2100)
  anoPublicacao: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  categoria: string;

  @IsInt()
  @Min(0)
  quantidadeTotal: number;

  @IsInt()
  @Min(0)
  quantidadeDisponivel: number;
}