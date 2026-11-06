import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getDashboard(): Promise<{
        totalUsuarios: number;
        totalProductos: number;
        totalServicios: number;
        totalDomicilios: number;
    }>;
    listarVendedores(): Promise<(import("mongoose").Document<unknown, {}, import("../usuarios/usuarios.schema").UsuarioDocument> & import("../usuarios/usuarios.schema").Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    suspender(id: string): Promise<import("mongoose").Document<unknown, {}, import("../usuarios/usuarios.schema").UsuarioDocument> & import("../usuarios/usuarios.schema").Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    reactivar(id: string): Promise<import("mongoose").Document<unknown, {}, import("../usuarios/usuarios.schema").UsuarioDocument> & import("../usuarios/usuarios.schema").Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    listarSolicitudesDomicilio(): Promise<(import("mongoose").Document<unknown, {}, import("../domicilio/domicilio.schema").SolicitudDomicilioDocument> & import("../domicilio/domicilio.schema").SolicitudDomicilio & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
