// Clase para actualizar notas
import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './createNotas.dto';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {} //Hereda sus funciones de createNota para ahorrar código
