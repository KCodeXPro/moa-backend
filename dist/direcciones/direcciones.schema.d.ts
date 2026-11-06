import { Document } from 'mongoose';
export type DireccionDocument = Direccion & Document;
export declare class Direccion {
    calle: string;
    numero: string;
    entre: string;
    edificio: string;
    reparto: string;
    lat: number;
    lon: number;
}
export declare const DireccionSchema: import("mongoose").Schema<Direccion, import("mongoose").Model<Direccion, any, any, any, Document<unknown, any, Direccion> & Direccion & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Direccion, Document<unknown, {}, import("mongoose").FlatRecord<Direccion>> & import("mongoose").FlatRecord<Direccion> & {
    _id: import("mongoose").Types.ObjectId;
}>;
