import { Usuario } from '../usuarios/usuario.entity';
export declare class Nota {
    id: number;
    titulo: string;
    descripcion: string;
    estado: string;
    usuario: Usuario;
}
