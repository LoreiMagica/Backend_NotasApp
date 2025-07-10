//Servicio para comunicar el backend con la base de datos al pedir  las operaciones con usuarios
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/createUsuario.dto';

//Encriptador de contraseñas
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepo: Repository<Usuario>,
  ) {}

    async crearUsuario(dto: CreateUsuarioDto): Promise<Usuario> {
    const existe = await this.usuariosRepo.findOneBy({ usuario: dto.nombre }); //Verifica si existe un usuario copn el mismo nombre antes de crearlo
    if (existe) {
      throw new ConflictException('Ya existe un usuario con este nombre.'); //En caso afirmativo, abota la operación y notifica al usuario
    }

      const hash = await bcrypt.hash(dto.contrasena, 10); // <--- hasheado
    const usuario = this.usuariosRepo.create({usuario: dto.nombre, contrasena: hash}); //Si no existe el usuario, lo verifica 
    return this.usuariosRepo.save(usuario);     // y lo crea
  }

  async obtenerUsuarioPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepo.findOne({ where: { id }, relations: ['notas'] }); //Busca en la base de datos el id del usuario
    if (!usuario) throw new NotFoundException('Usuario no encontrado'); //Y si no lo encuentra, avisa al usuario
    return usuario; //Pero si lo encuentra, lo devuelve
  }

  async obtenerUsuarioPorNombre(usuario: string): Promise<Usuario> {
    const usuarioValidado = await this.usuariosRepo.findOne({ where: { usuario }, relations: ['notas'] }); //Busca en la base de datos el nombre del usuario
    if (!usuarioValidado) throw new NotFoundException('Usuario no encontrado'); //Y si no lo encuentra, avisa al usuario
    return usuarioValidado; //Pero si lo encuentra, lo devuelve
  }
}
