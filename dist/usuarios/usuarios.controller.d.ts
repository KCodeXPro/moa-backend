import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.schema';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: any): Promise<Usuario>;
    register(dto: {
        nick: string;
        password: string;
        whatsapp?: string;
        esPrestador?: boolean;
    }): Promise<any>;
    findAll(): Promise<Usuario[]>;
    findPrestadores(): Promise<(import("mongoose").Document<unknown, {}, import("./usuarios.schema").UsuarioDocument> & Usuario & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Usuario>;
    findByNick(nick: string): Promise<Usuario>;
    update(id: string, updateUsuarioDto: any): Promise<Usuario>;
    updatePerfil(id: string, data: {
        whatsapp: string;
        esPrestador?: boolean;
    }): Promise<Usuario>;
    remove(id: string): Promise<void>;
}
