"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createNotas_dto_1 = require("./createNotas.dto");
class UpdateNotaDto extends (0, mapped_types_1.PartialType)(createNotas_dto_1.CreateNotaDto) {
}
exports.UpdateNotaDto = UpdateNotaDto;
//# sourceMappingURL=updateNotas.dto.js.map