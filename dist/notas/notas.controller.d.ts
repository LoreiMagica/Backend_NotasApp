import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/createNotas.dto';
import { UpdateNotaDto } from './dto/updateNotas.dto';
export declare class NotasController {
    private notasService;
    constructor(notasService: NotasService);
    crear(dto: CreateNotaDto): Promise<import("./nota.entity").Nota>;
    obtenerPorUsuario(usuarioId: string): Promise<import("./nota.entity").Nota[]>;
    actualizar(id: string, dto: UpdateNotaDto): Promise<import("./nota.entity").Nota>;
    borrar(id: string): Promise<{
        mensaje: string;
    }>;
}
