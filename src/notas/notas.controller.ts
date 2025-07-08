//Establece las urls y funciones de cada url para establecer las operaciones con notas
import { Controller, Post, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/createNotas.dto';
import { UpdateNotaDto } from './dto/updateNotas.dto';

@Controller('notas')
export class NotasController {
  constructor(private notasService: NotasService) {}

  @Post()
  crear(@Body() dto: CreateNotaDto) {
    return this.notasService.crearNota(dto); //Crea una nota al recibir un POST
  }

  @Get(':usuario/:usuarioId')
  obtenerPorUsuario(@Param('usuarioId') usuarioId: string) {
    return this.notasService.obtenerNotasPorUsuario(Number(usuarioId)); //Pide obtener todas las notas del usuario con id ":usuarioId"
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
