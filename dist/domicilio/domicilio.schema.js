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
exports.SolicitudDomicilioSchema = exports.SolicitudDomicilio = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SolicitudDomicilio = class SolicitudDomicilio {
};
exports.SolicitudDomicilio = SolicitudDomicilio;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Usuario', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SolicitudDomicilio.prototype, "prestadorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Producto', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SolicitudDomicilio.prototype, "productoId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SolicitudDomicilio.prototype, "compradorWhatsapp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, required: true }),
    __metadata("design:type", Object)
], SolicitudDomicilio.prototype, "productoSnapshot", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SolicitudDomicilio.prototype, "direccionVendedor", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: ['pendiente', 'contactado', 'entregado', 'cancelado'],
        default: 'pendiente',
    }),
    __metadata("design:type", String)
], SolicitudDomicilio.prototype, "estado", void 0);
exports.SolicitudDomicilio = SolicitudDomicilio = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], SolicitudDomicilio);
exports.SolicitudDomicilioSchema = mongoose_1.SchemaFactory.createForClass(SolicitudDomicilio);
//# sourceMappingURL=domicilio.schema.js.map