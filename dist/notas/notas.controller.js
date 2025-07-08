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
exports.NotasController = void 0;
const common_1 = require("@nestjs/common");
const notas_service_1 = require("./notas.service");
const createNotas_dto_1 = require("./dto/createNotas.dto");
const updateNotas_dto_1 = require("./dto/updateNotas.dto");
const passport_1 = require("@nestjs/passport");
let NotasController = class NotasController {
    notasService;
    constructor(notasService) {
        this.notasService = notasService;
    }
    crear(dto, req) {
        dto.usuarioId = req.user.id;
        return this.notasService.crearNota(dto);
    }
    obtenerPorUsuario(req) {
        const usuarioId = req.user.id;
        return this.notasService.obtenerNotasPorUsuario(usuarioId);
    }
    actualizar(id, dto) {
        return this.notasService.actualizarNota(Number(id), dto);
    }
    borrar(id) {
        return this.notasService.borrarNota(Number(id));
    }
};
exports.NotasController = NotasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createNotas_dto_1.CreateNotaDto, Object]),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "obtenerPorUsuario", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateNotas_dto_1.UpdateNotaDto]),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotasController.prototype, "borrar", null);
exports.NotasController = NotasController = __decorate([
    (0, common_1.Controller)('notas'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [notas_service_1.NotasService])
], NotasController);
//# sourceMappingURL=notas.controller.js.map