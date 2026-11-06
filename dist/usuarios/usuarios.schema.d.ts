import { Document } from 'mongoose';
export type UsuarioDocument = Usuario & Document;
export declare class Usuario {
    nick: string;
    password?: string;
    email: string;
    oauthProvider: string;
    oauthId: string;
    rol: string;
    esPrestador: boolean;
    tipoVenta: string;
    aceptaDomicilio: boolean;
    ubicacion: {
        calle?: string;
        numero?: string;
        edificio?: string;
        reparto?: string;
        lat?: number;
        lon?: number;
    } | null;
    whatsapp: string;
    whatsappEsPublico: boolean;
    tarifaDomicilio: number;
    disponible: boolean;
    estado: string;
    seed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const UsuarioSchema: import("mongoose").Schema<Usuario, import("mongoose").Model<Usuario, any, any, any, Document<unknown, any, Usuario> & Usuario & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usuario, Document<unknown, {}, import("mongoose").FlatRecord<Usuario>> & import("mongoose").FlatRecord<Usuario> & {
    _id: import("mongoose").Types.ObjectId;
}>;
