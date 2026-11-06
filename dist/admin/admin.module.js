"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const usuarios_schema_1 = require("../usuarios/usuarios.schema");
const productos_schema_1 = require("../productos/productos.schema");
const servicios_schema_1 = require("../servicios/servicios.schema");
const domicilio_schema_1 = require("../domicilio/domicilio.schema");
const auditoria_schema_1 = require("../auditoria/auditoria.schema");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: usuarios_schema_1.Usuario.name, schema: usuarios_schema_1.UsuarioSchema },
                { name: productos_schema_1.Producto.name, schema: productos_schema_1.ProductoSchema },
                { name: servicios_schema_1.Servicio.name, schema: servicios_schema_1.ServicioSchema },
                { name: domicilio_schema_1.SolicitudDomicilio.name, schema: domicilio_schema_1.SolicitudDomicilioSchema },
                { name: auditoria_schema_1.Auditoria.name, schema: auditoria_schema_1.AuditoriaSchema },
            ]),
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map