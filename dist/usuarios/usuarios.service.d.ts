import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/createUsuario.dto';
export declare class UsuariosService {
    private usuariosRepo;
    constructor(usuariosRepo: Repository<Usuario>);
    crearUsuario(dto: CreateUsuarioDto): Promise<Usuario>;
    obtenerUsuarioPorId(id: number): Promise<Usuario>;
    obtenerUsuarioPorNombre(usuario: string): Promise<Usuario>;
}
