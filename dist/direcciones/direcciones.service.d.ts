import { Model } from 'mongoose';
import { Direccion, DireccionDocument } from './direcciones.schema';
export declare class DireccionesService {
    private direccionModel;
    constructor(direccionModel: Model<DireccionDocument>);
    create(direccionDto: any): Promise<Direccion>;
    findAll(): Promise<Direccion[]>;
    search(query: any): Promise<Direccion[]>;
    findOne(id: string): Promise<Direccion>;
    remove(id: string): Promise<void>;
}
