import { ServiciosService } from './servicios.service';
import { Servicio } from './servicios.schema';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(createServicioDto: any): Promise<Servicio>;
    findAll(vendedorId?: string): Promise<Servicio[]>;
    findOne(id: string): Promise<Servicio>;
    update(id: string, updateServicioDto: any): Promise<Servicio>;
    remove(id: string): Promise<void>;
}
