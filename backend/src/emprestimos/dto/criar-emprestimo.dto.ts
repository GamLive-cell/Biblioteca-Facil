import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';

export class CriarEmprestimoDto {
  @IsMongoId()
  @IsNotEmpty()
  usuario: string;

  @IsMongoId()
  @IsNotEmpty()
  livro: string;

  @IsDateString()
  dataPrevistaDevolucao: string;
}
