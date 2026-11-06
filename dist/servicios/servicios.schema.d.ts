import { Document, Types } from 'mongoose';
export type ServicioDocument = Servicio & Document;
export declare class Servicio {
    vendedorId: Types.ObjectId;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    categoriaId: Types.ObjectId;
    esDomicilio: boolean;
    estado: string;
    seed: boolean;
    whatsapp: string;
    telefono: string;
    direccion: string;
    horario: string;
    menu: {
        item: string;
        precio: number;
    }[];
}
export declare const ServicioSchema: import("mongoose").Schema<Servicio, import("mongoose").Model<Servicio, any, any, any, Document<unknown, any, Servicio> & Servicio & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Servicio, Document<unknown, {}, import("mongoose").FlatRecord<Servicio>> & import("mongoose").FlatRecord<Servicio> & {
    _id: Types.ObjectId;
}>;
