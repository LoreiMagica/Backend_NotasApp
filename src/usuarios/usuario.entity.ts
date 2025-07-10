//Clase de objeto de Usuario
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Nota } from '../notas/nota.entity';

@Entity()
export class Usuario {

  //Id del usuario  
  @PrimaryGeneratedColumn()
  id: number;

  //Nombre de usuario que se utilizará para iniciar sesión
  @Column()
  usuario: string;

  //Contraseña que se utilizará para iniciar sesión
  @Column()
  contrasena: string;

  //Relación un usuario puede tener muchas notas
  @OneToMany(() => Nota, (nota) => nota.usuario)
  notas: Nota[];
}
