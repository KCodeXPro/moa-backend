"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const usuarios_service_1 = require("../usuarios/usuarios.service");
let GoogleStrategy = class GoogleStrategy {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
        this.client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    }
    async verifyGoogleToken(idToken) {
        try {
            const ticket = await this.client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (!payload) {
                throw new common_1.BadRequestException('Token de Google inválido');
            }
            const email = payload.email;
            const name = payload.name || email.split('@')[0];
            const googleSub = payload.sub;
            if (!email) {
                throw new common_1.BadRequestException('El token de Google no incluye email');
            }
            let usuario = await this.usuariosService.findByEmail(email);
            if (!usuario) {
                const nickBase = name.replace(/\s+/g, '_').toLowerCase();
                let nick = nickBase;
                let contador = 1;
                while (true) {
                    try {
                        const existe = await this.usuariosService.findByNick(nick);
                        if (!existe)
                            break;
                    }
                    catch {
                        break;
                    }
                    nick = `${nickBase}${contador}`;
                    contador++;
                }
                usuario = await this.usuariosService.createFromGoogle({
                    nick,
                    email,
                    oauthProvider: 'google',
                    oauthId: googleSub,
                    rol: 'vendedor',
                    password: null,
                    tipoVenta: 'ambos',
                    estado: 'activo',
                    whatsapp: '',
                    esPrestador: false,
                });
            }
            return {
                _id: usuario._id,
                nick: usuario.nick,
                rol: usuario.rol,
                email: usuario.email,
                oauthProvider: usuario.oauthProvider,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException)
                throw error;
            throw new common_1.InternalServerErrorException('Error verificando token de Google');
        }
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], GoogleStrategy);
//# sourceMappingURL=google.strategy.js.map