import { Document, Types } from 'mongoose';
export type SolicitudDomicilioDocument = SolicitudDomicilio & Document;
interface ProductoSnapshot {
    nombre: string;
    precio: number;
    imagen?: string;
    vendedorNombre: string;
    vendedorDireccion: string;
}
export declare class SolicitudDomicilio {
    prestadorId: Types.ObjectId;
    productoId: Types.ObjectId;
    compradorWhatsapp: string;
    productoSnapshot: ProductoSnapshot;
    direccionVendedor: string;
    estado: string;
}
export declare const SolicitudDomicilioSchema: import("mongoose").Schema<SolicitudDomicilio, import("mongoose").Model<SolicitudDomicilio, any, any, any, Document<unknown, any, SolicitudDomicilio> & SolicitudDomicilio & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SolicitudDomicilio, Document<unknown, {}, import("mongoose").FlatRecord<SolicitudDomicilio>> & import("mongoose").FlatRecord<SolicitudDomicilio> & {
    _id: Types.ObjectId;
}>;
export {};
