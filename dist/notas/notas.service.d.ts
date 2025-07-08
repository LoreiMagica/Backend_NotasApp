import { Repository } from 'typeorm';
import { Nota } from './nota.entity';
import { CreateNotaDto } from './dto/createNotas.dto';
import { UpdateNotaDto } from './dto/updateNotas.dto';
import { Usuario } from '../usuarios/usuario.entity';
export declare class NotasService {
    private notasRepo;
    private usuariosRepo;
    constructor(notasRepo: Repository<Nota>, usuariosRepo: Repository<Usuario>);
    crearNota(dto: CreateNotaDto): Promise<Nota>;
    obtenerNotasPorUsuario(usuarioId: number): Promise<Nota[]>;
    actualizarNota(id: number, dto: UpdateNotaDto): Promise<Nota>;
    borrarNota(id: number): Promise<{
        mensaje: string;
    }>;
}
