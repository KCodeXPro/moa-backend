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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioSchema = exports.Servicio = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Servicio = class Servicio {
};
exports.Servicio = Servicio;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Usuario', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Servicio.prototype, "vendedorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Servicio.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Servicio.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Servicio.prototype, "imagen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 1 }),
    __metadata("design:type", Number)
], Servicio.prototype, "precio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Categoria', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Servicio.prototype, "categoriaId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Servicio.prototype, "esDomicilio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'activo' }),
    __metadata("design:type", String)
], Servicio.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Servicio.prototype, "seed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Servicio.prototype, "whatsapp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Servicio.prototype, "telefono", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Servicio.prototype, "direccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Servicio.prototype, "horario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ item: String, precio: Number }], default: [] }),
    __metadata("design:type", Array)
], Servicio.prototype, "menu", void 0);
exports.Servicio = Servicio = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Servicio);
exports.ServicioSchema = mongoose_1.SchemaFactory.createForClass(Servicio);
//# sourceMappingURL=servicios.schema.js.map