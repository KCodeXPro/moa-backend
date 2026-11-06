import { UsuariosService } from '../usuarios/usuarios.service';
export declare class GoogleStrategy {
    private readonly usuariosService;
    private client;
    constructor(usuariosService: UsuariosService);
    verifyGoogleToken(idToken: string): Promise<any>;
}
