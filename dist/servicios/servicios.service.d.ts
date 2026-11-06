import { Model } from 'mongoose';
import { Servicio, ServicioDocument } from './servicios.schema';
export declare class ServiciosService {
    private servicioModel;
    constructor(servicioModel: Model<ServicioDocument>);
    create(createServicioDto: any): Promise<Servicio>;
    findAll(vendedorId?: string): Promise<Servicio[]>;
    findOne(id: string): Promise<Servicio>;
    update(id: string, updateServicioDto: any): Promise<Servicio>;
    remove(id: string): Promise<void>;
}
