import { Model } from 'mongoose';
import { Auditoria, AuditoriaDocument } from './auditoria.schema';
export declare class AuditoriaService {
    private auditoriaModel;
    constructor(auditoriaModel: Model<AuditoriaDocument>);
    registrar(dto: {
        adminId: string;
        accion: string;
        entidad: string;
        entidadId?: string;
        detalle?: Record<string, any>;
    }): Promise<import("mongoose").Document<unknown, {}, AuditoriaDocument> & Auditoria & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
