"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const categorias_module_1 = require("./categorias/categorias.module");
const productos_module_1 = require("./productos/productos.module");
const servicios_module_1 = require("./servicios/servicios.module");
const mensajes_module_1 = require("./mensajes/mensajes.module");
const domicilio_module_1 = require("./domicilio/domicilio.module");
const reportes_module_1 = require("./reportes/reportes.module");
const auditoria_module_1 = require("./auditoria/auditoria.module");
const admin_module_1 = require("./admin/admin.module");
const eventos_module_1 = require("./eventos/eventos.module");
const direcciones_module_1 = require("./direcciones/direcciones.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/moa-tradecenter'),
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            categorias_module_1.CategoriasModule,
            productos_module_1.ProductosModule,
            servicios_module_1.ServiciosModule,
            mensajes_module_1.MensajesModule,
            domicilio_module_1.DomicilioModule,
            reportes_module_1.ReportesModule,
            auditoria_module_1.AuditoriaModule,
            admin_module_1.AdminModule,
            eventos_module_1.EventosModule,
            direcciones_module_1.DireccionesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map