"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomicilioModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const domicilio_controller_1 = require("./domicilio.controller");
const domicilio_service_1 = require("./domicilio.service");
const domicilio_schema_1 = require("./domicilio.schema");
const usuarios_schema_1 = require("../usuarios/usuarios.schema");
const productos_schema_1 = require("../productos/productos.schema");
const mensajes_schema_1 = require("../mensajes/mensajes.schema");
let DomicilioModule = class DomicilioModule {
};
exports.DomicilioModule = DomicilioModule;
exports.DomicilioModule = DomicilioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: domicilio_schema_1.SolicitudDomicilio.name, schema: domicilio_schema_1.SolicitudDomicilioSchema },
                { name: usuarios_schema_1.Usuario.name, schema: usuarios_schema_1.UsuarioSchema },
                { name: productos_schema_1.Producto.name, schema: productos_schema_1.ProductoSchema },
                { name: mensajes_schema_1.Mensaje.name, schema: mensajes_schema_1.MensajeSchema },
            ]),
        ],
        controllers: [domicilio_controller_1.DomicilioController],
        providers: [domicilio_service_1.DomicilioService],
        exports: [domicilio_service_1.DomicilioService],
    })
], DomicilioModule);
//# sourceMappingURL=domicilio.module.js.map