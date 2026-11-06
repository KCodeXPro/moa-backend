import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from '../usuarios/usuarios.schema';
import { ProductoDocument } from '../productos/productos.schema';
import { ServicioDocument } from '../servicios/servicios.schema';
import { SolicitudDomicilio, SolicitudDomicilioDocument } from '../domicilio/domicilio.schema';
import { AuditoriaDocument } from '../auditoria/auditoria.schema';
export declare class AdminService {
    private usuarioModel;
    private productoModel;
    private servicioModel;
    private domicilioModel;
    private auditoriaModel;
    constructor(usuarioModel: Model<UsuarioDocument>, productoModel: Model<ProductoDocument>, servicioModel: Model<ServicioDocument>, domicilioModel: Model<SolicitudDomicilioDocument>, auditoriaModel: Model<AuditoriaDocument>);
    getDashboard(): Promise<{
        totalUsuarios: number;
        totalProductos: number;
        totalServicios: number;
        totalDomicilios: number;
    }>;
    listarVendedores(): Promise<(import("mongoose").Document<unknown, {}, UsuarioDocument> & Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    suspenderVendedor(id: string): Promise<import("mongoose").Document<unknown, {}, UsuarioDocument> & Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    reactivarVendedor(id: string): Promise<import("mongoose").Document<unknown, {}, UsuarioDocument> & Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    listarSolicitudesDomicilio(): Promise<(import("mongoose").Document<unknown, {}, SolicitudDomicilioDocument> & SolicitudDomicilio & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
