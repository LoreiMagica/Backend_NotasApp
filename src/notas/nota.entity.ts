//Clase objeto Nota
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity()
export class Nota {

  //Id clave primaria
  @PrimaryGeneratedColumn()
  id: number;

  //Título de la nota 
  @Column()
  titulo: string;

  //Descripción de la nota
  @Column()
  descripcion: string;

  //Estado actual de la nota (Pendiente, En progreso o Completada)
  @Column()
  estado: string;

  //Relación muchas notas pueden pertenecer a un único usuario
  @ManyToOne(() => Usuario, (usuario) => usuario.notas, { onDelete: 'CASCADE' })
  usuario: Usuario;
}
