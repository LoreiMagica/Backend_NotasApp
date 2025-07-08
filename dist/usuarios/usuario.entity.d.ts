import { Nota } from '../notas/nota.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    contrasena: string;
    notas: Nota[];
}
