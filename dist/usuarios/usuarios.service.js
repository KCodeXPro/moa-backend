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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const usuarios_schema_1 = require("./usuarios.schema");
const servicios_schema_1 = require("../servicios/servicios.schema");
const productos_schema_1 = require("../productos/productos.schema");
let UsuariosService = class UsuariosService {
    constructor(usuarioModel, servicioModel, productoModel) {
        this.usuarioModel = usuarioModel;
        this.servicioModel = servicioModel;
        this.productoModel = productoModel;
    }
    async create(createUsuarioDto) {
        const usuario = new this.usuarioModel(createUsuarioDto);
        return usuario.save();
    }
    async register(dto) {
        const { nick, password, whatsapp, esPrestador } = dto;
        if (!nick || !password) {
            throw new common_1.BadRequestException('El nick y la contraseña son obligatorios.');
        }
        const existe = await this.usuarioModel.findOne({ nick }).exec();
        if (existe) {
            throw new common_1.BadRequestException('El usuario ya existe con ese nick.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = new this.usuarioModel({
            nick,
            password: hashedPassword,
            whatsapp: whatsapp || '',
            esPrestador: !!esPrestador,
            rol: 'vendedor',
            tipoVenta: 'ambos',
            estado: 'activo',
        });
        const guardado = await nuevoUsuario.save();
        const usuarioObj = guardado.toObject();
        delete usuarioObj.password;
        const response = {
            _id: usuarioObj._id,
            nick: usuarioObj.nick,
            rol: usuarioObj.rol,
            whatsapp: usuarioObj.whatsapp,
            esPrestador: usuarioObj.esPrestador,
            disponible: usuarioObj.disponible,
            estado: usuarioObj.estado,
            tipoVenta: usuarioObj.tipoVenta,
            createdAt: usuarioObj.createdAt,
            updatedAt: usuarioObj.updatedAt,
        };
        return response;
    }
    async findAll() {
        return this.usuarioModel.find().exec();
    }
    async findOne(id) {
        const usuario = await this.usuarioModel.findById(id).exec();
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    async findByNick(nick) {
        const usuario = await this.usuarioModel.findOne({ nick }).exec();
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con nick ${nick} no encontrado`);
        }
        return usuario;
    }
    async findByEmail(email) {
        return this.usuarioModel.findOne({ email }).exec();
    }
    async createFromGoogle(dto) {
        const existe = await this.usuarioModel.findOne({ nick: dto.nick }).exec();
        if (existe) {
            throw new common_1.BadRequestException(`El usuario ya existe con ese nick.`);
        }
        const nuevoUsuario = new this.usuarioModel({
            nick: dto.nick,
            email: dto.email,
            oauthProvider: dto.oauthProvider,
            oauthId: dto.oauthId,
            password: null,
            rol: dto.rol,
            tipoVenta: dto.tipoVenta || 'ambos',
            estado: dto.estado || 'activo',
            whatsapp: dto.whatsapp || '',
            esPrestador: dto.esPrestador ?? false,
        });
        return nuevoUsuario.save();
    }
    async update(id, updateUsuarioDto) {
        const usuario = await this.usuarioModel
            .findByIdAndUpdate(id, updateUsuarioDto, { new: true })
            .exec();
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    async updatePerfil(id, data) {
        const usuario = await this.usuarioModel
            .findByIdAndUpdate(id, {
            whatsapp: data.whatsapp,
            esPrestador: data.esPrestador,
            tarifaDomicilio: data.tarifaDomicilio
        }, { new: true })
            .exec();
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        const usuarioObj = usuario.toObject();
        delete usuarioObj.password;
        return usuarioObj;
    }
    async remove(id) {
        await this.servicioModel.deleteMany({ vendedorId: id }).exec();
        await this.productoModel.deleteMany({ vendedorId: id }).exec();
        const result = await this.usuarioModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
    }
    async findPrestadores() {
        return this.usuarioModel
            .find({ esPrestador: true, estado: 'activo', disponible: true })
            .select('nick whatsapp tarifaDomicilio disponible createdAt')
            .sort({ createdAt: -1 })
            .exec();
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuarios_schema_1.Usuario.name)),
    __param(1, (0, mongoose_1.InjectModel)(servicios_schema_1.Servicio.name)),
    __param(2, (0, mongoose_1.InjectModel)(productos_schema_1.Producto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map