//Establece las urls y funciones de cada url para establecer las operaciones con usuarios
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/createUsuario.dto';


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
}
