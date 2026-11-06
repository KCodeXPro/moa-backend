import { Document, Types } from 'mongoose';
export type AuditoriaDocument = Auditoria & Document;
export declare class Auditoria {
    adminId: Types.ObjectId;
    accion: string;
    entidad: string;
    entidadId?: Types.ObjectId;
    detalle: Record<string, any>;
    createdAt: Date;
}
export declare const AuditoriaSchema: import("mongoose").Schema<Auditoria, import("mongoose").Model<Auditoria, any, any, any, Document<unknown, any, Auditoria> & Auditoria & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Auditoria, Document<unknown, {}, import("mongoose").FlatRecord<Auditoria>> & import("mongoose").FlatRecord<Auditoria> & {
    _id: Types.ObjectId;
}>;
