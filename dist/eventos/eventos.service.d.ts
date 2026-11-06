import { Model, Types } from 'mongoose';
import { Evento, EventoDocument } from './eventos.schema';
export declare class EventosService {
    private eventoModel;
    constructor(eventoModel: Model<EventoDocument>);
    registrarEvento(data: any): Promise<import("mongoose").Document<unknown, {}, EventoDocument> & Evento & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    obtenerMasConsultados(limite?: number): Promise<any[]>;
}
