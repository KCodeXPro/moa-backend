import { Document, Types } from 'mongoose';
export type EventoDocument = Evento & Document;
export declare class Evento {
    productoId: Types.ObjectId;
    vendedorId: Types.ObjectId;
    tipo: string;
}
export declare const EventoSchema: import("mongoose").Schema<Evento, import("mongoose").Model<Evento, any, any, any, Document<unknown, any, Evento> & Evento & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Evento, Document<unknown, {}, import("mongoose").FlatRecord<Evento>> & import("mongoose").FlatRecord<Evento> & {
    _id: Types.ObjectId;
}>;
