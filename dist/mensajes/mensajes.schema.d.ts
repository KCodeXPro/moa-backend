import { Document, Types } from 'mongoose';
export type MensajeDocument = Mensaje & Document;
export declare class Mensaje {
    vendedorId: Types.ObjectId;
    productoId?: Types.ObjectId;
    servicioId?: Types.ObjectId;
    compradorWhatsapp: string;
    texto: string;
    tipo: string;
    leido: boolean;
}
export declare const MensajeSchema: import("mongoose").Schema<Mensaje, import("mongoose").Model<Mensaje, any, any, any, Document<unknown, any, Mensaje> & Mensaje & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Mensaje, Document<unknown, {}, import("mongoose").FlatRecord<Mensaje>> & import("mongoose").FlatRecord<Mensaje> & {
    _id: Types.ObjectId;
}>;
