//Servicio para comunicar el backend con la base de datos al solicitar las operaciones con notas
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from './nota.entity';
import { CreateNotaDto } from './dto/createNotas.dto';
import { UpdateNotaDto } from './dto/updateNotas.dto';
import { Usuario } from '../usuarios/usuario.entity';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Nota)
    private notasRepo: Repository<Nota>,

    @InjectRepository(Usuario)
    private usuariosRepo: Repository<Usuario>,
  ) {}

  //Operación de crear una nueva nota
  async crearNota(dto: CreateNotaDto) {
    const usuario = await this.usuariosRepo.findOneBy({ id: dto.usuarioId });  //Busca al usuario por su Id
    if (!usuario) throw new BadRequestException('Usuario no válido');  //En caso de no encontrar el usuario, aborta la operación y lanza un error
    const nota = this.notasRepo.create({ ...dto, usuario }); //Valida la nota con el dto
    return this.notasRepo.save(nota);  //Y con todo eso, crea la nota al fin
  }

  //Operación de obtener las notas del usuario logeado
  async obtenerNotasPorUsuario(usuarioId: number) {
    return this.notasRepo.find({
      where: { usuario: { id: usuarioId } },  //Busca las notas que tengan el Id del usuario logeado
      order: { id: 'ASC' },
    });
  }

  //Operación de actualizar una nota existente
  async actualizarNota(id: number, dto: UpdateNotaDto) {
    const nota = await this.notasRepo.findOne({ where: { id } }); //Busca la nota por el id de esta
    if (!nota) throw new NotFoundException('Nota no encontrada'); //Si no la encuentra, aborta la operación y lanza un error
    Object.assign(nota, dto);  //Corrobora que todo esté correcto gracias al dto
    return this.notasRepo.save(nota);  //Todo listo, guarda la nota
  }

  //Operación para borrar una nota
  async borrarNota(id: number) {
    const res = await this.notasRepo.delete(id);  //Busca la nota por su id
    if (res.affected === 0) throw new NotFoundException('Nota no encontrada');  //Como siempre, si no la busca, lanza un error
    return { mensaje: 'Nota borrada correctamente' };  //Notifica al usuario con un mensaje de confirmación
  }
}
