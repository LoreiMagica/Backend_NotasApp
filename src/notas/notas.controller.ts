//Establece las urls y funciones de cada url para establecer las operaciones con notas
import { Controller, Post, Get, Body, Param, Put, Delete, UseGuards, Request  } from '@nestjs/common'; //Obtiene los métodos CRUD  y protectores de rutas
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/createNotas.dto';
import { UpdateNotaDto } from './dto/updateNotas.dto';
import { AuthGuard } from '@nestjs/passport'; //Protege las rutas si no está logeado


@Controller('notas')
@UseGuards(AuthGuard('jwt')) //Protege todas las rutas del controlador
export class NotasController {
  constructor(private notasService: NotasService) {}

    @Post()
  crear(@Body() dto: CreateNotaDto, @Request() req) {
    dto.usuarioId = req.user.id; //Sobrescribe el id de usuario con el del token del usuario logeado
    return this.notasService.crearNota(dto); //Crea una nota al recibir un POST
  }


 /* @Get(':usuario/:usuarioId')
  obtenerPorUsuario(@Param('usuarioId') usuarioId: string) {
    return this.notasService.obtenerNotasPorUsuario(Number(usuarioId)); //Pide obtener todas las notas del usuario con id ":usuarioId"
  }
    */
    @Get()
  obtenerPorUsuario(@Request() req) {
    const usuarioId = req.user.id;
    return this.notasService.obtenerNotasPorUsuario(usuarioId); //Pide obtener todas las notas del usuario logeado
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() dto: UpdateNotaDto) {
    return this.notasService.actualizarNota(Number(id), dto); //Busca la nota con id ":id"
  }

  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.notasService.borrarNota(Number(id)); //Borra la nota con id ":id"
  }
}
