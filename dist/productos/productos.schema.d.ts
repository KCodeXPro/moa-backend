import { Document, Types } from 'mongoose';
export type ProductoDocument = Producto & Document;
export declare class Producto {
    vendedorId: Types.ObjectId;
    nombre: string;
    descripcion: string;
    imagenes: string[];
    variantes: {
        color: string;
        talla: string;
        cantidad: number;
    }[];
    tipoVenta: string;
    precio: number;
    precioMayorista: number;
    categoriaId: Types.ObjectId;
    tieneDomicilio: boolean;
    estado: string;
    seed: boolean;
    etiquetas: string[];
}
export declare const ProductoSchema: import("mongoose").Schema<Producto, import("mongoose").Model<Producto, any, any, any, Document<unknown, any, Producto> & Producto & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Producto, Document<unknown, {}, import("mongoose").FlatRecord<Producto>> & import("mongoose").FlatRecord<Producto> & {
    _id: Types.ObjectId;
}>;
