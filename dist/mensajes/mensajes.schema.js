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
exports.MensajeSchema = exports.Mensaje = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Mensaje = class Mensaje {
};
exports.Mensaje = Mensaje;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Usuario', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Mensaje.prototype, "vendedorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Producto' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Mensaje.prototype, "productoId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Servicio' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Mensaje.prototype, "servicioId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Mensaje.prototype, "compradorWhatsapp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Mensaje.prototype, "texto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['producto', 'servicio'] }),
    __metadata("design:type", String)
], Mensaje.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Mensaje.prototype, "leido", void 0);
exports.Mensaje = Mensaje = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Mensaje);
exports.MensajeSchema = mongoose_1.SchemaFactory.createForClass(Mensaje);
exports.MensajeSchema.index({ createdAt: 1 }, {
    expireAfterSeconds: 5 * 24 * 60 * 60,
    partialFilterExpression: { leido: false },
});
//# sourceMappingURL=mensajes.schema.js.map