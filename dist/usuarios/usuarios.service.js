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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    usuariosRepo;
    constructor(usuariosRepo) {
        this.usuariosRepo = usuariosRepo;
    }
    async crearUsuario(dto) {
        const existe = await this.usuariosRepo.findOneBy({ usuario: dto.nombre });
        if (existe) {
            throw new common_1.ConflictException('Ya existe un usuario con este nombre.');
        }
        const hash = await bcrypt.hash(dto.contrasena, 10);
        const usuario = this.usuariosRepo.create({ usuario: dto.nombre, contrasena: hash });
        return this.usuariosRepo.save(usuario);
    }
    async obtenerUsuarioPorId(id) {
        const usuario = await this.usuariosRepo.findOne({ where: { id }, relations: ['notas'] });
        if (!usuario)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return usuario;
    }
    async obtenerUsuarioPorNombre(usuario) {
        const usuarioValidado = await this.usuariosRepo.findOne({ where: { usuario }, relations: ['notas'] });
        if (!usuarioValidado)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return usuarioValidado;
    }
    async eliminarUsuario(id) {
        const resultado = await this.usuariosRepo.delete(id);
        return !!resultado.affected && resultado.affected > 0;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map