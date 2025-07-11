import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/createUsuario.dto';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    crear(dto: CreateUsuarioDto): Promise<import("./usuario.entity").Usuario>;
    obtener(id: string): Promise<import("./usuario.entity").Usuario>;
    eliminarUsuario(id: string): Promise<{
        mensaje: string;
    }>;
}
