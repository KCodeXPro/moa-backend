import { MensajesService } from './mensajes.service';
import { Mensaje } from './mensajes.schema';
export declare class MensajesController {
    private readonly mensajesService;
    constructor(mensajesService: MensajesService);
    create(dto: {
        vendedorId: string;
        productoId?: string;
        whatsappComprador: string;
        texto?: string;
    }): Promise<Mensaje>;
}
