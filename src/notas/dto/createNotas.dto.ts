//Clase para validar una nota antes de crearla
import { IsNotEmpty, IsIn } from 'class-validator';

export class CreateNotaDto {
  @IsNotEmpty()  //Comprueba que la nota tenga un título
  titulo: string;

  @IsNotEmpty()  //Comprueba que la nota tenga una descripcción
  descripcion: string;

  @IsIn(['pendiente', 'progreso', 'completada'])  //Se asegura que la nota tenga un valor de estado
  estado: string;

  @IsNotEmpty()  //Y se asegura de que está vinculada a un usuario
  usuarioId: number;
}

