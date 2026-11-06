import { EventosService } from './eventos.service';
export declare class EventosController {
    private readonly eventosService;
    constructor(eventosService: EventosService);
    registrar(body: any): Promise<import("mongoose").Document<unknown, {}, import("./eventos.schema").EventoDocument> & import("./eventos.schema").Evento & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMasConsultados(): Promise<any[]>;
}
