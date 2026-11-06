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
exports.MensajesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mensajes_schema_1 = require("./mensajes.schema");
const usuarios_schema_1 = require("../usuarios/usuarios.schema");
const productos_schema_1 = require("../productos/productos.schema");
const WHATSAPP_REGEX = /^\+53\s?5\d{7}$/;
const LIMITE_MENSAJES_DIA = 20;
let MensajesService = class MensajesService {
    constructor(mensajeModel, usuarioModel, productoModel) {
        this.mensajeModel = mensajeModel;
        this.usuarioModel = usuarioModel;
        this.productoModel = productoModel;
    }
    validarWhatsapp(whatsapp) {
        if (!WHATSAPP_REGEX.test(whatsapp)) {
            throw new common_1.BadRequestException('El WhatsApp debe tener formato cubano válido (+53 5XXXXXXX).');
        }
    }
    async create(dto) {
        this.validarWhatsapp(dto.whatsappComprador);
        const vendedor = await this.usuarioModel.findById(dto.vendedorId).exec();
        if (!vendedor) {
            throw new common_1.NotFoundException('Vendedor no encontrado.');
        }
        if (vendedor.estado !== 'activo') {
            throw new common_1.BadRequestException('Este vendedor no está disponible en este momento.');
        }
        if (dto.productoId) {
            const producto = await this.productoModel
                .findById(dto.productoId)
                .exec();
            if (!producto) {
                throw new common_1.NotFoundException('Producto no encontrado.');
            }
        }
        const inicioDia = new Date();
        inicioDia.setHours(0, 0, 0, 0);
        const mensajesHoy = await this.mensajeModel
            .countDocuments({
            compradorWhatsapp: dto.whatsappComprador,
            createdAt: { $gte: inicioDia },
        })
            .exec();
        if (mensajesHoy >= LIMITE_MENSAJES_DIA) {
            throw new common_1.BadRequestException('Has alcanzado el límite de mensajes por hoy. Inténtalo mañana.');
        }
        const tipo = dto.productoId ? 'producto' : 'servicio';
        const mensaje = new this.mensajeModel({
            vendedorId: dto.vendedorId,
            productoId: dto.productoId ?? null,
            servicioId: null,
            compradorWhatsapp: dto.whatsappComprador,
            texto: dto.texto ?? '',
            tipo,
        });
        return mensaje.save();
    }
    async findByVendedor(vendedorId) {
        return this.mensajeModel
            .find({ vendedorId })
            .sort({ createdAt: -1 })
            .exec();
    }
    async markAsRead(id) {
        const mensaje = await this.mensajeModel
            .findByIdAndUpdate(id, { leido: true }, { new: true })
            .exec();
        if (!mensaje) {
            throw new common_1.NotFoundException('Mensaje no encontrado.');
        }
        return mensaje;
    }
};
exports.MensajesService = MensajesService;
exports.MensajesService = MensajesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(mensajes_schema_1.Mensaje.name)),
    __param(1, (0, mongoose_1.InjectModel)(usuarios_schema_1.Usuario.name)),
    __param(2, (0, mongoose_1.InjectModel)(productos_schema_1.Producto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MensajesService);
//# sourceMappingURL=mensajes.service.js.map