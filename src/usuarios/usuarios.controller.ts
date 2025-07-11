//Establece las urls y funciones de cada url para establecer las operaciones con usuarios
import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/createUsuario.dto';
import { NotFoundException } from '@nestjs/common';


@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

    @Post()
  crear(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.crearUsuario(dto); //Crea un usuario al enviar los datos de este con POST
  }

  @Get(':id')
  obtener(@Param('id') id: string) {
    return this.usuariosService.obtenerUsuarioPorId(Number(id)); //Obtiene el usuario con id ":id"
  }

  @Delete(':id')
  async eliminarUsuario(@Param('id') id: string) {
    const resultado = await this.usuariosService.eliminarUsuario(Number(id)); //Busca al usuario con el id indicado
    if (!resultado) {
      throw new NotFoundException('Usuario no encontrado');  //Si no lo encuentra, manda el error
    }
    return { mensaje: 'Usuario eliminado correctamente' };  //Si logra encontrar un usuario con ese id, notifica al usuario
  }
}
