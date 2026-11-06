import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './usuarios.schema';
import { ServicioDocument } from '../servicios/servicios.schema';
import { ProductoDocument } from '../productos/productos.schema';
export declare class UsuariosService {
    private usuarioModel;
    private servicioModel;
    private productoModel;
    constructor(usuarioModel: Model<UsuarioDocument>, servicioModel: Model<ServicioDocument>, productoModel: Model<ProductoDocument>);
    create(createUsuarioDto: any): Promise<Usuario>;
    register(dto: {
        nick: string;
        password: string;
        whatsapp?: string;
        esPrestador?: boolean;
    }): Promise<any>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario>;
    findByNick(nick: string): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario | null>;
    createFromGoogle(dto: {
        nick: string;
        email: string;
        oauthProvider: string;
        oauthId: string;
        rol: string;
        password: string | null;
        tipoVenta?: string;
        estado?: string;
        whatsapp?: string;
        esPrestador?: boolean;
    }): Promise<Usuario>;
    update(id: string, updateUsuarioDto: any): Promise<Usuario>;
    updatePerfil(id: string, data: {
        whatsapp: string;
        esPrestador?: boolean;
        tarifaDomicilio?: number;
    }): Promise<Usuario>;
    remove(id: string): Promise<void>;
    findPrestadores(): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument> & Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
