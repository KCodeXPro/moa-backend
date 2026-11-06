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
exports.DireccionesController = void 0;
const common_1 = require("@nestjs/common");
const direcciones_service_1 = require("./direcciones.service");
let DireccionesController = class DireccionesController {
    constructor(direccionesService) {
        this.direccionesService = direccionesService;
    }
    async create(body) {
        return this.direccionesService.create(body);
    }
    async findAll() {
        return this.direccionesService.findAll();
    }
    async search(query) {
        return this.direccionesService.search(query);
    }
    async remove(id) {
        return this.direccionesService.remove(id);
    }
};
exports.DireccionesController = DireccionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DireccionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DireccionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('buscar'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DireccionesController.prototype, "search", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DireccionesController.prototype, "remove", null);
exports.DireccionesController = DireccionesController = __decorate([
    (0, common_1.Controller)('direcciones'),
    __metadata("design:paramtypes", [direcciones_service_1.DireccionesService])
], DireccionesController);
//# sourceMappingURL=direcciones.controller.js.map