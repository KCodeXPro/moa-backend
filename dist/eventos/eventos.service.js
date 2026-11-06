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
exports.EventosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const eventos_schema_1 = require("./eventos.schema");
let EventosService = class EventosService {
    constructor(eventoModel) {
        this.eventoModel = eventoModel;
    }
    async registrarEvento(data) {
        try {
            console.log("➡️ Recibiendo evento:", data);
            const nuevoEvento = new this.eventoModel({
                productoId: new mongoose_2.Types.ObjectId(data.productoId),
                vendedorId: new mongoose_2.Types.ObjectId(data.vendedorId),
                tipo: data.tipo,
            });
            const guardado = await nuevoEvento.save();
            console.log("✅ Evento guardado:", guardado);
            return guardado;
        }
        catch (error) {
            console.error("❌ ERROR GUARDANDO EVENTO:", error);
            throw error;
        }
    }
    async obtenerMasConsultados(limite = 5) {
        return this.eventoModel.aggregate([
            { $group: { _id: '$productoId', total: { $sum: 1 } } },
            { $sort: { total: -1 } },
            { $limit: limite },
            {
                $lookup: {
                    from: 'productos',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'productoInfo',
                },
            },
            { $unwind: { path: '$productoInfo', preserveNullAndEmptyArrays: true } },
            {
                $match: {
                    'productoInfo.nombre': { $exists: true, $ne: null },
                },
            },
            {
                $project: {
                    _id: 0,
                    nombre: '$productoInfo.nombre',
                    total: 1,
                },
            },
        ]);
    }
};
exports.EventosService = EventosService;
exports.EventosService = EventosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(eventos_schema_1.Evento.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventosService);
//# sourceMappingURL=eventos.service.js.map