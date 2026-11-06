import { DomicilioService } from './domicilio.service';
import { SolicitudDomicilio } from './domicilio.schema';
export declare class DomicilioController {
    private readonly domicilioService;
    constructor(domicilioService: DomicilioService);
    create(dto: {
        prestadorId: string;
        productoId: string;
        whatsappComprador: string;
    }): Promise<SolicitudDomicilio>;
}
