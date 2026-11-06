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
exports.ProductoSchema = exports.Producto = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Usuario', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Producto.prototype, "vendedorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Producto.prototype, "imagenes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, default: [] }),
    __metadata("design:type", Array)
], Producto.prototype, "variantes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['minorista', 'mayorista'] }),
    __metadata("design:type", String)
], Producto.prototype, "tipoVenta", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Producto.prototype, "precioMayorista", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Categoria', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Producto.prototype, "categoriaId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Producto.prototype, "tieneDomicilio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'activo', enum: ['activo', 'oculto', 'eliminado'] }),
    __metadata("design:type", String)
], Producto.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Producto.prototype, "seed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Producto.prototype, "etiquetas", void 0);
exports.Producto = Producto = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Producto);
exports.ProductoSchema = mongoose_1.SchemaFactory.createForClass(Producto);
//# sourceMappingURL=productos.schema.js.map