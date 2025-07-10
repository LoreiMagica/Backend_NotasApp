import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
export declare class AuthService {
    private usuariosService;
    private jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    validarUsuario(nombre: string, contrasena: string): Promise<{
        id: number;
        usuario: string;
        notas: import("../notas/nota.entity").Nota[];
    }>;
    login(nombre: string, contrasena: string): Promise<{
        access_token: string;
    }>;
}
