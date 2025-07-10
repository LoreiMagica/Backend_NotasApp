//Servicio para comprobar las operaciones de login
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';  //Librería para encriptar
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService
  ) {}

  //Función para comprobar que el usuario y contraseña son correctos
  async validarUsuario(nombre: string, contrasena: string) {
    const usuario = await this.usuariosService.obtenerUsuarioPorNombre(nombre); //Compara el nombre introducido con el de la base de datos
    if (usuario && await bcrypt.compare(contrasena, usuario.contrasena)) {  //Si la contraseña introducida es igual a la de la base de datos 
      const { contrasena, ...resto } = usuario; //Y si todo está bien, rellena los valores del usuario para devolverlos a la app 
      return resto;
    }
    throw new UnauthorizedException('Usuario o contraseña inválido');  //Sino, devuelve un mensaje de error
  }

  //Clase para logear al usuario
  async login(nombre: string, contrasena: string) {
    const usuario = await this.validarUsuario(nombre, contrasena); //Llama a la función anterior para validar las credenciales
    const payload = { sub: usuario.id, nombre: usuario.usuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
