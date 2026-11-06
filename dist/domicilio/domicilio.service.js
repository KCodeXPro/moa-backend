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
exports.DomicilioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const domicilio_schema_1 = require("./domicilio.schema");
const usuarios_schema_1 = require("../usuarios/usuarios.schema");
const productos_schema_1 = require("../productos/productos.schema");
const mensajes_schema_1 = require("../mensajes/mensajes.schema");
const WHATSAPP_REGEX = /^\+53\s?5\d{7}$/;
let DomicilioService = class DomicilioService {
    constructor(solicitudModel, usuarioModel, productoModel, mensajeModel) {
        this.solicitudModel = solicitudModel;
        this.usuarioModel = usuarioModel;
        this.productoModel = productoModel;
        this.mensajeModel = mensajeModel;
    }
    validarWhatsapp(whatsapp) {
        if (!WHATSAPP_REGEX.test(whatsapp)) {
            throw new common_1.BadRequestException('El WhatsApp debe tener formato cubano válido (+53 5XXXXXXX).');
        }
    }
    async create(dto) {
        this.validarWhatsapp(dto.whatsappComprador);
        const prestador = await this.usuarioModel.findById(dto.prestadorId).exec();
        if (!prestador) {
            throw new common_1.NotFoundException('Prestador de domicilio no encontrado.');
        }
        if (!prestador.esPrestador) {
            throw new common_1.BadRequestException('El usuario seleccionado no es un prestador de domicilio.');
        }
        if (prestador.estado !== 'activo') {
            throw new common_1.BadRequestException('Este prestador no está disponible en este momento.');
        }
        if (prestador.disponible !== true) {
            throw new common_1.BadRequestException('Este prestador no está recibiendo solicitudes ahora.');
        }
        const producto = await this.productoModel.findById(dto.productoId).exec();
        if (!producto) {
            throw new common_1.NotFoundException('Producto no encontrado.');
        }
        if (producto.estado !== 'activo') {
            throw new common_1.BadRequestException('Este producto ya no está disponible.');
        }
        const vendedor = await this.usuarioModel.findById(producto.vendedorId).exec();
        if (!vendedor || !vendedor.direccion) {
            throw new common_1.BadRequestException('El vendedor de este producto no tiene dirección registrada para domicilio.');
        }
        const productoSnapshot = {
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagenes?.[0] ?? undefined,
            vendedorNombre: vendedor.nick,
            vendedorDireccion: vendedor.direccion,
        };
        const solicitud = new this.solicitudModel({
            prestadorId: dto.prestadorId,
            productoId: dto.productoId,
            compradorWhatsapp: dto.whatsappComprador,
            productoSnapshot,
            direccionVendedor: vendedor.direccion,
            estado: 'pendiente',
        });
        const saved = await solicitud.save();
        const textoNotificacion = `Nueva solicitud de domicilio.\n` +
            `Producto: ${producto.nombre}\n` +
            `Precio: ${(producto.precio / 100).toFixed(2)} CUP\n` +
            `Dirección del vendedor: ${vendedor.direccion}\n` +
            `WhatsApp del comprador: ${dto.whatsappComprador}`;
        await this.mensajeModel.create({
            vendedorId: dto.prestadorId,
            productoId: dto.productoId,
            servicioId: null,
            compradorWhatsapp: dto.whatsappComprador,
            texto: textoNotificacion,
            tipo: 'producto',
        });
        return saved;
    }
    async findByPrestador(prestadorId) {
        return this.solicitudModel
            .find({ prestadorId })
            .sort({ createdAt: -1 })
            .exec();
    }
    async findAll() {
        return this.solicitudModel
            .find()
            .sort({ createdAt: -1 })
            .exec();
    }
};
exports.DomicilioService = DomicilioService;
exports.DomicilioService = DomicilioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(domicilio_schema_1.SolicitudDomicilio.name)),
    __param(1, (0, mongoose_1.InjectModel)(usuarios_schema_1.Usuario.name)),
    __param(2, (0, mongoose_1.InjectModel)(productos_schema_1.Producto.name)),
    __param(3, (0, mongoose_1.InjectModel)(mensajes_schema_1.Mensaje.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DomicilioService);
//# sourceMappingURL=domicilio.service.js.map