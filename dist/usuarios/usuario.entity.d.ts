import { Nota } from '../notas/nota.entity';
export declare class Usuario {
    id: number;
    usuario: string;
    contrasena: string;
    notas: Nota[];
}
