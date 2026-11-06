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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const usuarios_schema_1 = require("../usuarios/usuarios.schema");
const productos_schema_1 = require("../productos/productos.schema");
const servicios_schema_1 = require("../servicios/servicios.schema");
const domicilio_schema_1 = require("../domicilio/domicilio.schema");
const auditoria_schema_1 = require("../auditoria/auditoria.schema");
let AdminService = class AdminService {
    constructor(usuarioModel, productoModel, servicioModel, domicilioModel, auditoriaModel) {
        this.usuarioModel = usuarioModel;
        this.productoModel = productoModel;
        this.servicioModel = servicioModel;
        this.domicilioModel = domicilioModel;
        this.auditoriaModel = auditoriaModel;
    }
    async getDashboard() {
        const totalUsuarios = await this.usuarioModel.countDocuments();
        const totalProductos = await this.productoModel.countDocuments({ estado: 'activo' });
        const totalServicios = await this.servicioModel.countDocuments({ estado: 'activo' });
        const totalDomicilios = await this.domicilioModel.countDocuments();
        return { totalUsuarios, totalProductos, totalServicios, totalDomicilios };
    }
    async listarVendedores() {
        return this.usuarioModel.find({ rol: 'vendedor' }).select('-__v').exec();
    }
    async suspenderVendedor(id) {
        const usuario = await this.usuarioModel.findByIdAndUpdate(id, { estado: 'suspendido' }, { new: true });
        if (!usuario)
            return null;
        await this.productoModel.updateMany({ vendedorId: id }, { estado: 'oculto' });
        await this.servicioModel.updateMany({ vendedorId: id }, { estado: 'oculto' });
        try {
            await this.auditoriaModel.create({
                adminId: '000000000000000000000000',
                accion: 'suspender',
                entidad: 'vendedor',
                entidadId: id,
            });
        }
        catch (e) {
            console.log('Error guardando auditoría', e);
        }
        return usuario;
    }
    async reactivarVendedor(id) {
        const usuario = await this.usuarioModel.findByIdAndUpdate(id, { estado: 'activo' }, { new: true });
        if (!usuario)
            return null;
        await this.productoModel.updateMany({ vendedorId: id }, { estado: 'activo' });
        await this.servicioModel.updateMany({ vendedorId: id }, { estado: 'activo' });
        try {
            await this.auditoriaModel.create({
                adminId: '000000000000000000000000',
                accion: 'reactivar',
                entidad: 'vendedor',
                entidadId: id,
            });
        }
        catch (e) {
            console.log('Error guardando auditoría', e);
        }
        return usuario;
    }
    async listarSolicitudesDomicilio() {
        return this.domicilioModel.find().sort({ createdAt: -1 }).exec();
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuarios_schema_1.Usuario.name)),
    __param(1, (0, mongoose_1.InjectModel)(productos_schema_1.Producto.name)),
    __param(2, (0, mongoose_1.InjectModel)(servicios_schema_1.Servicio.name)),
    __param(3, (0, mongoose_1.InjectModel)(domicilio_schema_1.SolicitudDomicilio.name)),
    __param(4, (0, mongoose_1.InjectModel)(auditoria_schema_1.Auditoria.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map