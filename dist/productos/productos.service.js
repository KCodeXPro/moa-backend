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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const productos_schema_1 = require("./productos.schema");
let ProductosService = class ProductosService {
    constructor(productoModel) {
        this.productoModel = productoModel;
    }
    async create(createProductoDto) {
        const producto = new this.productoModel(createProductoDto);
        return producto.save();
    }
    async findAll(vendedorId) {
        const filter = vendedorId ? { vendedorId } : {};
        return this.productoModel.find(filter).sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        const producto = await this.productoModel.findById(id).exec();
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }
    async update(id, updateProductoDto) {
        const producto = await this.productoModel
            .findByIdAndUpdate(id, updateProductoDto, { new: true })
            .exec();
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }
    async remove(id) {
        const result = await this.productoModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(productos_schema_1.Producto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductosService);
//# sourceMappingURL=productos.service.js.map