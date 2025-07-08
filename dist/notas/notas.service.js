"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nota_entity_1 = require("./nota.entity");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let NotasService = class NotasService {
    notasRepo;
    usuariosRepo;
    constructor(notasRepo, usuariosRepo) {
        this.notasRepo = notasRepo;
        this.usuariosRepo = usuariosRepo;
    }
    async crearNota(dto) {
        const usuario = await this.usuariosRepo.findOneBy({ id: dto.usuarioId });
        if (!usuario)
            throw new common_1.BadRequestException('Usuario no válido');
        const nota = this.notasRepo.create({ ...dto, usuario });
        return this.notasRepo.save(nota);
    }
    async obtenerNotasPorUsuario(usuarioId) {
        return this.notasRepo.find({
            where: { usuario: { id: usuarioId } },
            order: { id: 'ASC' },
        });
    }
    async actualizarNota(id, dto) {
        const nota = await this.notasRepo.findOne({ where: { id } });
        if (!nota)
            throw new common_1.NotFoundException('Nota no encontrada');
        Object.assign(nota, dto);
        return this.notasRepo.save(nota);
    }
    async borrarNota(id) {
        const res = await this.notasRepo.delete(id);
        if (res.affected === 0)
            throw new common_1.NotFoundException('Nota no encontrada');
        return { mensaje: 'Nota borrada correctamente' };
    }
};
exports.NotasService = NotasService;
exports.NotasService = NotasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nota_entity_1.Nota)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], NotasService);
//# sourceMappingURL=notas.service.js.map